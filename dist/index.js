#!/usr/bin/env node
import { execSync } from 'child_process';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import path from 'path';
import { fileUrlDestinationMapper } from './fileMapper.js';
function isGitDirectory() {
    try {
        execSync('git rev-parse --git-dir', { stdio: 'pipe' });
        return true;
    }
    catch {
        return false;
    }
}
async function downloadFile(url, filePath) {
    try {
        console.log("Downloading: ", url);
        const response = await fetch(url);
        const data = await response.text();
        if (!existsSync(path.dirname(filePath)))
            mkdirSync(path.dirname(filePath), { recursive: true });
        writeFileSync(filePath, data.trim().concat('\n'), { encoding: 'utf8' });
        return true;
    }
    catch (error) {
        console.error("Error downloading file: ", url, "\n", error);
        process.exit(2);
    }
}
async function main() {
    const isGit = isGitDirectory();
    if (!isGit) {
        execSync('git init', { stdio: 'pipe' });
    }
    for (const file of fileUrlDestinationMapper) {
        await downloadFile(file.url, file.path);
    }
}
main();
//# sourceMappingURL=index.js.map