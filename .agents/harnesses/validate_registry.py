#!/usr/bin/env python3
"""Minimal dependency-free validator for the agent registries."""

from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[2]
REGISTRY = ROOT / ".agents" / "registry"


def referenced_paths(text: str) -> list[str]:
    return re.findall(r"^\s+path:\s+(.+?)\s*$", text, flags=re.MULTILINE)


def main() -> int:
    errors: list[str] = []
    for registry_file in sorted(REGISTRY.glob("*.yaml")):
        text = registry_file.read_text(encoding="utf-8")
        if not text.startswith("version:"):
            errors.append(f"{registry_file}: missing version header")
        for relative in referenced_paths(text):
            target = ROOT / relative
            if not target.exists():
                errors.append(f"{registry_file}: missing referenced path {relative}")

    if errors:
        print("Registry validation failed:")
        for error in errors:
            print(f"- {error}")
        return 1

    print("Registry validation passed.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
