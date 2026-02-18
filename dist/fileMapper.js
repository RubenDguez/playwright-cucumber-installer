import path from "node:path";
const baseUrl = new URL("https://raw.githubusercontent.com/RubenDguez/playwright-cucumber-installer/refs/heads/bow/template");
export const fileUrlDestinationMapper = [
    {
        url: new URL(".gitignore", baseUrl).toString(),
        path: path.join(process.cwd(), ".gitignore"),
    },
];
//# sourceMappingURL=fileMapper.js.map