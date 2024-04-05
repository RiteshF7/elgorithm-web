export const PlaygroundContainerContent = []

/*
//objects are nested because can contain multiple component state at one time
{
                LED: {
                    active: true,
                    color: 'green'
                },
                Buzzer: {
                    active: true,
                    color: 'green'
                }
            },

            */

export const PlaygroundRunnerContent = [
    {
        initialState: {
            lightSensor: {
                value: 40
            },
            led: {
                active: false,
                color: 'green'
            },
        },
        desiredState: [
            {
                lightSensor: {
                    value: 40
                },
                led: {
                    active: true,
                    color: 'green'
                },

            },
            {
                lightSensor: {
                    value: 40
                },
                led: {
                    active: false,
                    color: 'green'
                },

            },
        ],
    },
    {
        initialState: {
            LED: {
                active: false,
                color: 'green'
            },
        },
        desiredState: {
            LED: {
                active: true,
                color: 'green'
            },
        },

    },
    {
        initialState: {
            LED: {
                active: false,
                color: 'green'
            },
        },
        desiredState: [
           [
               {
                   active: true,
                   color: 'green'
               },
               {
                   active: true,
                   color: 'green'
               }
           ],
            [
                {
                    active: false,
                    color: 'green'
                },
                {
                    active: false,
                    color: 'green'
                }
            ]
        ]

    }
]




