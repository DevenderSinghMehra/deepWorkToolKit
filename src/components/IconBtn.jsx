import { Icon } from "./Icon";
//!think about wheather it is worth keeping it or not. 

export function IconBtn({ className, iconClassName, iconName, ...btnProps }) {
    return (
        <button
            className={className}
            {...btnProps}
        >
            <Icon className={iconClassName} iconName={iconName} />
        </button>
    )
}
