import React, { FC, useEffect } from "react";
import { resetMessageQueue } from "@/utils/pg-comm-channel.util";

interface ComponentProps {
    initialState: any;
    desiredState: any;
}

function withComponentInitialization<T extends ComponentProps>(
    WrappedComponent: FC<T>,
    componentName: string,
    handleSuccess: () => void,
    handleFailure: () => void
): FC<T> {
    const WithComponentInitialization: FC<T> = (props) => {
        useEffect(() => {
            resetComponent();
            initComponent();
            return () => resetComponent(); // Clean up on unmount
        }, []); // Run only on mount

        const resetComponent = () => {
            handleFailure();
        };

        const initComponent = () => {
            // Initialize component here
            // You may need to adjust this part based on the specific initialization logic for each component
            handleSuccess();
        };

        return < WrappedComponent {...props}/>
    };

    WithComponentInitialization.displayName = `WithComponentInitialization(${componentName})`;

    return WithComponentInitialization;
}

export default withComponentInitialization;
