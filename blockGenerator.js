const fs = require('fs');

// Get command-line arguments
const args = process.argv.slice(2); // Slice to remove 'node' and script file path

if (args.length !== 2) {
    console.error('Usage: node appendToFile.js <Block_ID>');
    process.exit(1); // Exit with a non-zero status code to indicate an error
}

const blockId = args[0]
const componentKey = args[1]
const functionName  = blockId.replaceAll('_',"")

// File path
const jsGeneratorFilePath = 'src/utils/playground/workspace/blocks/generators/javascript.js';
const channelMessagesFilePath = 'src/utils/playground/workspace/uicontroller/channelMessages.ts';



// Data to append to the file
const jsGenratorDefination  = `
    forJsBlock['${blockId}'] = function(block, generator) {
    generator.definitions_['${blockId}'] =  channelMessages.${functionName}.toString();
    return \`\\n ${functionName}()\\n\`
};`;

const channelMessageDefination = `
export function ${functionName}() {
    // @ts-ignore
    window['_elg_pg_comm_channel'].sendMessage('${componentKey}', {
      //data: 'Hello World!'
    });
    // @ts-ignore
    window['_elg_pg_comm_channel'].sendMessage('delay', {
        time: 50
    });

}`

appendToFile(channelMessagesFilePath, channelMessageDefination);

appendToFile(jsGeneratorFilePath, jsGenratorDefination);

// Append to the file
function appendToFile(filePath, dataToAppend) {
    fs.appendFile(filePath, dataToAppend, (err) => {
        if (err) {
            console.error('Error appending to file:', err);
            return;
        }
        console.log('Data has been appended to the file successfully.');
    });

}
