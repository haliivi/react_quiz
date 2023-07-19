import { Component } from "react";
import classes from "./Drawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import { NavLink } from "react-router-dom";

class Drawer extends Component {
    renderLinks(links) {
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
        const links = [
            {to: '/', label: 'Список',},
        ]

        if (this.props.isAuthenticated) {
            links.push(
                {to: '/quiz-creator', label: 'Создать тест',},
                {to: '/logout', label: 'Выйти',},
            )
        } else {
            links.push(
                {to: '/auth', label: 'Авторизация',},
            )
        }
        return (
            <>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks(links)}
                    </ul>
                </nav>
                {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
            </>
        )
    }
}

export default Drawer