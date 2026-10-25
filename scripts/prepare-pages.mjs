import { copyFileSync, writeFileSync } from 'node:fs';

// Pages fallback requests boot the app instead of redirecting visitors to /.
copyFileSync(new URL('../dist/index.html', import.meta.url), new URL('../dist/404.html', import.meta.url));
writeFileSync(new URL('../dist/.nojekyll', import.meta.url), '');
