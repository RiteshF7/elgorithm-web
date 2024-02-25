let port, textEncoder, writableStreamClosed, writer;

export async function connectSerial() {
    try {
        port = await navigator.serial.requestPort();
        await port.open({baudRate: 115200});
        textEncoder = new TextEncoderStream();
        writableStreamClosed = textEncoder.readable.pipeTo(port.writable);
        writer = textEncoder.writable.getWriter();
        await listenToPort();
    } catch (e) {
        alert("Serial Connection Failed" + e);
    }
}

function convertCodeToByteString(pythonCode) {
    let byteArray = new TextEncoder('utf-16').encode(pythonCode);
    return byteArray.join(', ');
}

function sendSerialData(executableCommands) {
    writer.write(executableCommands);
}

export function sendCodeToDevice(pythonCode) {
    const byteString = convertCodeToByteString(pythonCode);
    const executableCommands = buildExecutableCommand(byteString);
    sendSerialData(executableCommands);
}

function buildExecutableCommand(byteCodeString) {
    let createFile = "f=open('code.py','w');\r"
    let createBinaryArray = `byteArray = [${byteCodeString}];\r`
    let createByteString = "codeString = ''.join(chr(i) for i in byteArray);\r"
    let printFile = "print(open('code.py').read());\r"
    let writeFile = `f.write(codeString);\r`
    let closeFile = "f.close();\r"
    let execFile = "exec(open('code.py').read(),globals());\r"
    // let listdir = "import os; os.listdir('.');\r";

    const executableCommands =
        createFile +
        createBinaryArray +
        createByteString +
        writeFile +
        printFile +
        closeFile +
        execFile

    return executableCommands;
}


async function listenToPort() {
    const textDecoder = new TextDecoderStream();
    const readableStreamClosed = port.readable.pipeTo(textDecoder.writable);
    const reader = textDecoder.readable.getReader();

    // Listen to data coming from the serial device.
    while (true) {
        const {value, done} = await reader.read();
        if (done) {
            // Allow the serial port to be closed later.
            console.log('[readLoop] DONE', done);
            reader.releaseLock();
            break;
        }
        // value is a string.
        console.log(value + '\n');
    }
}



