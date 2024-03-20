import blockKeys from "@/utils/playground/workspace/blocks/blockKeys";

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
                'type': blockKeys.moveUp
            },
            {
                'kind': 'block',
                'type': blockKeys.turnOnLed
            },
            {
                'kind': 'block',
                'type': blockKeys.turnOffLed
            },
            {
                'kind': 'block',
                'type': blockKeys.blinkLed
            },

            {
                'kind': 'block',
                'type': blockKeys.moveDown
            },
            {
                'kind': 'block',
                'type': blockKeys.moveRight
            },
            {
                'kind': 'block',
                'type': blockKeys.moveLeft
            },
            {
                'kind': 'block',
                'type': blockKeys.moveTopRight
            },
            {
                'kind': 'block',
                'type': blockKeys.moveTopLeft
            },
            {
                'kind': 'block',
                'type': blockKeys.moveBottomRight
            },
            {
                'kind': 'block',
                'type': blockKeys.moveBottomLeft
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
