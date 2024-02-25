import turnLed from "../../uicontroller/turnonled";

export const forJsBlock = Object.create(null);



forJsBlock['change_led_state'] = function (block, generator) {
    const dropdown_led_state = block.getFieldValue('LED_STATE');
    generator.definitions_['led_function'] = turnLed.toString()
    // generator.definitions_['sleep']= sleep.toString()

    return `turnLed(${dropdown_led_state})\n`

};

