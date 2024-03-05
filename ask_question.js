import readline from 'readline';
import OpenAI from "openai";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var userInput;

function getUserInput() {
    return new Promise((resolve) => {
      rl.question('Ask something: ', (userInput) => {
        resolve(userInput);
      });
    });
  }


async function askChatGPT(userInput) {
    const openai = new OpenAI({
        apiKey: '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'
    });
    
    
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "user", content: userInput }],
        model: "gpt-3.5-turbo",
    });
    
    console.log(chatCompletion.choices[0].message.content)

}

async function main() {
    const userInput = await getUserInput();

    askChatGPT(userInput);
}

main();