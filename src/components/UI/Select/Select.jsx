import classes from "./Select.module.css"

const Select = props => {
    const htmlFor = `${props.label}-${Math.random()}`

    return (
        <div className={classes.Select}>
            <label
                htmlFor={htmlFor}
            >{props.label}</label> 
            <select
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
            >
                {props.options.map((option, i) => {
                    return (
                        <option
                            value={option.value}
                            key={option.value + i}
                        >
                            {option.text}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

export default Select