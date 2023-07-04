import classes from "./AnswersList.module.css"
import AnswerItem from "./AnswerItem/AnswerItem"

const AnswersList = props => (
    <ul className={classes.AnswersList}>
        {props.answers.map((answer, i) => (
            <AnswerItem
                key={i} answer={answer}
                onAnswerClick={props.onAnswerClick}
            />
        ))}
    </ul>
)

export default AnswersList