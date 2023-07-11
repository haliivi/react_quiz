import { Component } from "react";
import classes from "./Auth.module.css";
import Button from "../../components/UI/Button/Button"

export default class Auth extends Component {
    loginHandler = () => {

    }

    registerHandler = () => {

    }

    onSubmitHandler = e => {e.preventDefault()} 

    render () {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Авторизация</h1>
                    <form onSubmit={this.onSubmitHandler} className={classes.AuthForm}>
                        <input type="text" />
                        <input type="text" />
                        <Button
                            type="success"
                            onClick={this.loginHandler}
                        >Войти</Button>
                        <Button
                            type="primary"
                            onClick={this.registerHandler}
                        >Зарегистрироваться</Button>
                    </form>
                </div>
            </div>
        )
    }
}