export const PlaygroundContainerContent = [


]

export const PlaygroundRunnerContent =  {
    initialState: {
        lightSensor: {
            value: 40
        },
        led: {
            active: false,
            color: 'green'
        },
    },
    desiredState: {
        lightSensor: {
            value: 80
        },
        led: {
            active: true,
            color: 'green'
        },
    },


}

