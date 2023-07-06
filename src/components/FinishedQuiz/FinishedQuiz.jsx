import classes from "./FinishedQuiz.module.css"

const FinishedQuiz = props => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++
        }
        return total
    }, 0)
    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                {
                    props.quiz.map((quizItem, i) => {
                        const cls = [
                            'fa-solid',
                            props.results[quizItem.id] === 'error' ? 'fa-xmark' : ' fa-check',
                            classes[props.results[quizItem.id]],
                        ]
                        return (
                            <li key={i}>
                                <strong>{i + 1}.</strong>&nbsp;
                                {quizItem.question}
                                <i className={cls.join(' ')}></i>
                            </li>
                        )
                    })
                }
            </ul>
            <p>Правильно {successCount} из {props.quiz.length}</p>
            <div className="">
                <button onClick={props.onRetry}>Повторить</button>
            </div>
        </div>
    )
}

export default FinishedQuiz