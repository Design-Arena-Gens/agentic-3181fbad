#!/usr/bin/env bash
set -euo pipefail
if [[ -z "${PUPPETEER_CHROME_PATH:-}" ]]; then
  echo "PUPPETEER_CHROME_PATH is not set" >&2
  exit 1
fi
"$PUPPETEER_CHROME_PATH" --no-sandbox --disable-dev-shm-usage "$@"
