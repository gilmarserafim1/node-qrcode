import prompt from 'prompt';
import promptSchemaMain from './prompts-schema/prompt-schema-main.js';
import createQRCode from './services/qrcode.js';
import createPassword from './services/password.js';

async function main() {
    prompt.get(promptSchemaMain, async (err, choose) => {
        if(err) console.log(err);

        if(choose.select == 1) await createQRCode();

        if(choose.select == 2) await createPassword();

    });

    prompt.start();
}

main();