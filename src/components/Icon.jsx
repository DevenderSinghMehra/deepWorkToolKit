import spriteIcons from "../assets/spriteIcons.svg?url&no-inline";

export function Icon({ className, iconName }) {
    return (
        <svg className={className}>
            <use href={`${spriteIcons}#${iconName}`}></use>
        </svg>
    );
}