export const Toolboxes = {
    turnOnLed: {
        'kind': 'flyoutToolbox',

        'contents': [
            {
                'kind': 'block',
                'type': 'controls_repeat_ext',
                'inputs': {
                    'TIMES': {
                        'shadow': {
                            'type': 'math_number',
                            'fields': {
                                'NUM': 10,
                            },
                        },
                    },
                },
            },
            {
                'kind': 'block',
                'type': 'change_led_state'
            },
        ]


    }
}
