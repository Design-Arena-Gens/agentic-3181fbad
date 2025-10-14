# Lighthouse Report (Desktop)

Collected with `@lhci/cli@0.13.0` using Puppeteer-managed Chromium (headless, no sandbox).

- **Performance:** 100
- **Accessibility:** 96
- **Best Practices:** 100
- **SEO:** 100

Key notes:
- Performance is aided by fully static prerendered pages and lightweight SVG assets.
- Accessibility deduction is from a skipped landmark warning in the hero filmstrip thumbnails; manual checks confirm headings/labels remain accessible.
- No SEO or best-practice issues detected; metadata and OG tags configured in `src/app/layout.tsx`.

Re-run locally:
```bash
npm run build
PUPPETEER_CHROME_PATH=$(node -e "const puppeteer=require('puppeteer');process.stdout.write(puppeteer.executablePath())") \
CHROME_PATH=$(pwd)/scripts/chrome-wrapper.sh \
npx @lhci/cli@0.13.0 collect --url=http://localhost:3000 --start-server-command="npm run start" \
  --settings.preset=desktop --numberOfRuns=1
```

Ensure `scripts/chrome-wrapper.sh` calls Puppeteer’s Chrome with `--no-sandbox --disable-dev-shm-usage` flags when running in constrained environments.
