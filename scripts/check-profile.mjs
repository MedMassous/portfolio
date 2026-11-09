// Warns (does not fail) about placeholders that must be replaced before going live.
import { readFileSync, existsSync } from 'node:fs';

const files = ['src/data/profile.ts', 'src/data/projects.ts', 'src/data/certifications.ts'];
const problems = [];

for (const f of files) {
  readFileSync(f, 'utf8')
    .split('\n')
    .forEach((line, i) => {
      if (/TODO/.test(line) && !line.trim().startsWith('//') && !line.trim().startsWith('*')) {
        problems.push(`${f}:${i + 1}  ${line.trim()}`);
      }
    });
}

const certSrc = readFileSync('src/data/certifications.ts', 'utf8');
const emptyVerify = (certSrc.match(/verifyUrl: ''/g) || []).length;
if (emptyVerify) problems.push(`src/data/certifications.ts  ${emptyVerify} certification(s) have no verifyUrl yet`);

if (!existsSync('public/cv/Mohamed-Massous-CV.pdf')) {
  problems.push('public/cv/Mohamed-Massous-CV.pdf is missing (the CV button will 404)');
}

if (problems.length) {
  console.warn('\n⚠  Portfolio placeholders still to fill before publishing:\n');
  problems.forEach((p) => console.warn('  - ' + p));
  console.warn('');
} else {
  console.log('✔ Profile data complete.');
}
