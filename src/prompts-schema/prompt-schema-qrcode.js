import chalk from "chalk";

const promptSchemaQRCode = [
    {
        name: "link",
        description: chalk.yellow("Digite o link para gerar o QR CODE"),
    },
    {
        name: "type",
        description: chalk.yellow(
            "Escolha o tipo de QR CODE\n[1] - NORMAL\n[2] - SMALL"
        ),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Inválido! Escolha entre 1 e 2"),
        required: true,
    },
];

export default promptSchemaQRCode;