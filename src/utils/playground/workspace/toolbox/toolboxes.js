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
            {
                'kind': 'block',
                'type': 'move_forward'
            },
            {
                'kind': 'block',
                'type': 'move_up'
            },
            {
                'kind': 'block',
                'type': 'delay_ms',
                'inputs': {
                    'time': {
                        'shadow': {
                            'type': 'math_number',
                            'fields': {
                                'NUM': 10,
                            },
                        },
                    },
                },
            },
        ]


    }
}
