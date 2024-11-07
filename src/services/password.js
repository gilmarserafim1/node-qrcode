import chalk from "chalk";
import dotenv from "dotenv";

const permittedCharacters = async () => {

    dotenv.config();
    let characters = [];

    if(process.env.UPPERCASE === "true") characters.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    if(process.env.LOWERCASE === "true") characters.push(..."abcdefghijklmnopqrstuvwxyz");
    if(process.env.NUMBERS === "true") characters.push(..."0123456789");
    if(process.env.SPECIAL_CHARACTERS === "true") characters.push(..."!@#$%^&*()-_");

    return characters;
}

const createPassword = async () => {
    console.log(chalk.green("Password:"));
    
    const password = async () => {
        const characters = await permittedCharacters();
        const passwordLength = process.env.PASSWORD_LENGTH;
        let newPassword = '';
        for(let i = 0; i < passwordLength; i++){
            const index = Math.floor(Math.random() * characters.length);
            newPassword += characters[index];
        }
        return newPassword;
    }

    console.log(await password());
}

export default createPassword;