import {ButtonHTMLAttributes, FC} from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    uiType: 'primary' | 'secondary'
}

export const Button: FC<ButtonProps> = (props) => {
    const {uiType = 'primary', children, className, ...rest} = props;
    return (
        <button
            className={clsx(
                'border-2 rounded px-5 py-1.5 box-border',
                'hover:drop-shadow-md flex items-center justify-center',
                'text-sm font-bold min-w-28',
                uiType === 'primary' && 'bg-primary border-primary text-content-contrast',
                uiType === 'secondary' && 'border-content text-content',
                className
            )} {...rest}>
            {children}
        </button>
    )
}
