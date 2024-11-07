import chalk from "chalk";

const promptSchemaMain = [
    {
        name: "select",
        description: chalk.yellow.bold(
            "Escolha a ferramenta:\n[1] - QRCODE GENERATOR\n[2] - PASSWORD GENERATOR"
        ),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Inválido! Escolha entre 1 e 2"),
        required: true,           
    },
];

export default promptSchemaMain;