import { Component } from "react";
import classes from "./Drawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import { NavLink } from "react-router-dom";

const links = [
    {to: '/', label: 'Список',},
    {to: '/auth', label: 'Авторизация',},
    {to: '/quiz-creator', label: 'Создать тест',},
]

class Drawer extends Component {
    renderLinks() {
        return links.map((link, i) => {
            return (
                <li key={i}>
                    <NavLink
                        to={link.to}
                        className={({isActive, isPending}) => isActive ? classes.active : null}
                        onClick={this.props.onClose}
                    >{link.label}</NavLink>
                </li>
            )
        })
    }

    render () {
        const cls = [classes.Drawer]
        if (!this.props.isOpen) {
            cls.push(classes.close)
        }
        return (
            <>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
                {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
            </>
        )
    }
}

export default Drawer