Steps to test basic ChatGPT API:

1. Install node.js
https://nodejs.org/en/download

2. Install openai package (run from command line)
npm install --save openai

3. Get API key for ChatGPT
https://platform.openai.com/api-keys

Copy the API key into the javascript code. Also, top up ChatGPT account with some money to use it ;)

4. Visual Studio Code json extension
Add a package.json file to the same folder where the javascript file is located.
Add this line to the json file:
{
    "type": "module"
}

Otherwise the javascript runs into error when importing packages, for reasons I don't yet understand.