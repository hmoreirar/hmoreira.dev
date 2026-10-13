#!/usr/bin/env python3
"""Fail the build if any internal link or asset in the built site is missing.

Usage: python3 scripts/check-internal-links.py <dist-dir>

Checks every href/src in the generated HTML against the filesystem so that a
missing image, stylesheet or page can never reach production unnoticed.
"""
from __future__ import annotations

import re
import sys
from pathlib import Path
from urllib.parse import unquote, urlsplit

ATTRS = re.compile(r"""(?:href|src)\s*=\s*["']([^"']+)["']""", re.IGNORECASE)
EXTERNAL = ("http://", "https://", "mailto:", "tel:", "data:", "javascript:", "//")


def collect_refs(html: Path) -> list[str]:
    return ATTRS.findall(html.read_text(encoding="utf-8"))


def resolve(page: Path, root: Path, ref: str) -> Path | None:
    """Return the target path for an internal ref, or None when not applicable."""
    if not ref or ref.startswith(EXTERNAL) or ref.startswith("#"):
        return None

    path = unquote(urlsplit(ref).path)
    if not path:
        return None

    base = root if path.startswith("/") else page.parent
    return (base / path.lstrip("/")).resolve()


def exists(target: Path) -> bool:
    if target.is_dir():
        return (target / "index.html").is_file()
    return target.is_file()


def main() -> int:
    root = Path(sys.argv[1] if len(sys.argv) > 1 else "dist").resolve()
    if not root.is_dir():
        print(f"No existe el directorio: {root}")
        return 1

    pages = sorted(root.rglob("*.html"))
    broken: list[tuple[str, str]] = []

    for page in pages:
        for ref in collect_refs(page):
            target = resolve(page, root, ref)
            if target is None:
                continue
            if not exists(target):
                broken.append((str(page.relative_to(root)), ref))

    if broken:
        print(f"Links internos rotos: {len(broken)}\n")
        for page, ref in broken:
            print(f"  {page}  ->  {ref}")
        return 1

    print(f"OK: {len(pages)} paginas, sin links internos rotos.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
