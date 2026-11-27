import { execFileSync } from 'node:child_process';
import { mkdir, mkdtemp, rm, rmdir, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';

const root = fileURLToPath(new URL('.', import.meta.url));
const windows = process.argv.includes('--windows');
if (windows && (process.platform !== 'win32' || process.arch !== 'x64' ||
    Number(process.versions.node.split('.')[0]) < 26)) {
  throw new Error('生成便携版需要 Windows x64 和 Node.js 26 或更新版本。');
}

await build({
  absWorkingDir: root, entryPoints: ['app.mjs'], outfile: 'app.browser.js',
  bundle: true, platform: 'browser', format: 'iife', target: 'es2022',
});

if (windows) {
  const scratch = await mkdtemp(join(tmpdir(), 'se-workflow-'));
  const main = join(scratch, 'portable-main.mjs');
  const configPath = join(scratch, 'sea-config.json');
  const output = join(root, 'dist', 'SE-Workflow-Classroom.exe');
  try {
    await build({
      absWorkingDir: root, entryPoints: ['server.mjs'], outfile: main,
      bundle: true, platform: 'node', format: 'esm', target: 'node26',
    });
    const assetNames = ['index.html', 'style.css', 'app.browser.js', 'app.mjs', 'workflow.mjs', 'examples.mjs',
      'pipeline.mjs', 'interaction.mjs', 'observability.mjs', 'consensus.mjs', 'distill.mjs', 'agents.mjs'];
    const config = {
      main, mainFormat: 'module', output, disableExperimentalSEAWarning: true, execArgvExtension: 'none',
      assets: Object.fromEntries(assetNames.map(name => [name, join(root, name)])),
    };
    await mkdir(join(root, 'dist'), {recursive: true});
    await writeFile(configPath, JSON.stringify(config, null, 2));
    execFileSync(process.execPath, ['--build-sea=' + configPath], {stdio: 'inherit'});
  } finally {
    await rm(main, {force: true});
    await rm(configPath, {force: true});
    await rmdir(scratch);
  }
}
