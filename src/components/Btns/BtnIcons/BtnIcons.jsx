export default function BtnIcons({
    icon: Icon,
    bg,
    className,
    iconClassName,
    ...props
}) {
    return (
        <button
            className={className}
            style={{ background: bg }}
            {...props}
        >
            <Icon className={iconClassName} />
        </button>
    );
}

