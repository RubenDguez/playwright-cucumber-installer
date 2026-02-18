import path from "node:path";

const baseUrl = new URL("https://raw.githubusercontent.com/RubenDguez/playwright-cucumber-installer/refs/heads/bow/src/template/");

export const fileUrlDestinationMapper: Array<{ url: string, path: string }> = [
    { url: new URL(".gitignore", baseUrl).toString(), path: path.join(process.cwd(), ".gitignore") },
    { url: new URL("playcucumber.config.ts", baseUrl).toString(), path: path.join(process.cwd(), ".gitignore") }
]