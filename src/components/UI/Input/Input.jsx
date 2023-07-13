import classes from "./Input.module.css"

function isInvalid ({valid, touched, shouldValidate}) {
    return !valid && shouldValidate && touched
}

const Input = props => {
    const {
        type='text',
        cls=[classes.Input],
        label,
        value,
        onChange,
        errorMessage,
    } = props
    const htmlFor = `${type}-${Math.random()}`
    
    if (isInvalid(props)) {
        cls.push(classes.invalid)
    }

    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{label}</label>
            <input onChange={onChange} value={value} id={htmlFor} type={type} />
            {isInvalid(props) ? <span>{errorMessage || "Введите верное значение"}</span> : null}
        </div>
    )
}

export default Input