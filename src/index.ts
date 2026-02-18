#!/usr/bin/env node

import { execSync } from 'child_process';

function isGitDirectory(): boolean {
    try {
        execSync('git rev-parse --git-dir', { stdio: 'pipe' });
        return true;
    } catch {
        return false;
    }
}

function main() {
    
}

main();
