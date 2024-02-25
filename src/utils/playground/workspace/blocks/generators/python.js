export const forPyBlock = Object.create(null);




forPyBlock['change_led_state'] = function(block, generator) {
    var dropdown_led_state = block.getFieldValue('LED_STATE');
    // TODO: Assemble python into code variable.
    let value_pin = 2;

    generator.definitions_['import_pin'] = 'from machine import Pin\n';
    generator.definitions_['gpio_set'] = `

def gpio_set(pin,value):
  if value >= 1:
    Pin(pin, Pin.OUT).on()
  else:
    Pin(pin, Pin.OUT).off()
`;

    return 'gpio_set(' + value_pin + ', ' + dropdown_led_state + ')\n';
    // return `gpio_set(${value_pin}, ${dropdown_led_state})\n`;
};
