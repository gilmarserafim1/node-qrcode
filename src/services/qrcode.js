import prompt from "prompt";
import qr from "qrcode-terminal"
import promptSchemaQRCode from "../prompts-schema/prompt-schema-qrcode.js"
import chalk from "chalk";

const createQRCode = async () => {
    prompt.get(promptSchemaQRCode, async (err, choose) => {
        if(err) {
            console.log(err);
            return;
        }
        const isSmall = choose.type == 2;

        qr.generate(choose.link, { small: isSmall }, qrcode => {
            console.log(chalk.green("QR CODE gerado com sucesso!\n"));
            console.log(qrcode);
        });
    });
    prompt.start();
}

export default createQRCode;