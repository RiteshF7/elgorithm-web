export const PlaygroundContainerContent = [


]

export const PlaygroundRunnerContent =  [
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

    }
]




