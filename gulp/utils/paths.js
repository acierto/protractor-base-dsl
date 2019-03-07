import path from 'path';

const projectDir = path.resolve(__dirname, '..', '..');
const distDir = path.resolve(projectDir, 'dist');
const devDistDir = path.resolve(projectDir, 'devDist');
const ghPagesDir = path.resolve(projectDir, 'ghPages');
const srcDir = path.resolve(projectDir, 'app');
const testsDir = path.resolve(projectDir, 'tests');

export default {
    nodeModulesDir: `${projectDir}/node_modules`,
    devDistDir,
    distDir,
    ghPagesDir,
    projectDir,
    srcDir,
    testsDir
}
