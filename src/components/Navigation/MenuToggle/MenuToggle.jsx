import classes from "./MenuToggle.module.css"

const MenuToggle = props => {
    const cls = [
        classes.MenuToggle,
        'fa',
        'fa-solid',
    ]
    if (props.isOpen) {
        cls.push(...['fa-xmark', classes.open])
    } else {
        cls.push('fa-bars')
    }

    return (
        <i
            className={cls.join(' ')}
            onClick={props.onToggle}
        />
    )
}

export default MenuToggle