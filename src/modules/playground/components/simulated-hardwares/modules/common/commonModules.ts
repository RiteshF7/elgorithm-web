import {forPyBlock} from "@/utils/playground/workspace/blocks/blocks";
import {pythonGenerator} from "blockly/python";

export const CommonModules = {}

export enum PythonImportKey {
    MACHINE,
    PIN
}

export function pythonImport(key: PythonImportKey) {
    switch (key) {
        case PythonImportKey.PIN:
            pythonGenerator.definitions_['import_pin'] = 'from machine import Pin';
            break;
        case PythonImportKey.MACHINE:
            pythonGenerator.definitions_['import_machine'] = 'import machine';
            break
    }
}

export enum PythonFunctionKey{
    GPIO_SET
}

export function pythonFunction(key: PythonFunctionKey) {
    switch (key){
        case PythonFunctionKey.GPIO_SET:
            pythonGenerator.definitions_['gpio_set'] = 'def gpio_set(pin,value):\n  if value >= 1:\n    Pin(pin, Pin.OUT).on()\n  else:\n    Pin(pin, Pin.OUT).off()';

    }
}

