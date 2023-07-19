import axios from 'axios';
import { decodeToken } from 'react-jwt';
import { AUTH_SUCCESS, AUTH_LOGOUT } from './actionTypes';

export  function auth(email, password, isLogin) {
    return async dispatch => {
        const authData = {
            email,
            password,
            returnSecretToken: true,
        }
        const api_key = process.env.REACT_APP_API_KEY
        const response = await axios.post(
            isLogin ?
            `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${api_key}` :
            `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${api_key}`,
            authData
        )
        const data = response.data
        const expirationTime = decodeToken(data.idToken).exp * 1000
        const tokenLiveTime = expirationTime - Date.now()
        const expirationDate = new Date(expirationTime)
        localStorage.setItem('token', data.idToken)
        localStorage.setItem('userId', data.localId)
        localStorage.setItem('expirationDate', expirationDate)
        dispatch(authSuccess(data.idToken))
        dispatch(autoLogout(tokenLiveTime))
    }
}

export function autoLogout(time) {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, time)
    }
}

export function logout() {
    ['token', 'userId', 'expirationDate'].forEach((item) => localStorage.removeItem(item))
    return {
        type: AUTH_LOGOUT,
    }
}

export function authSuccess(token) {
    return {
        type: AUTH_SUCCESS,
        token,
    }
}

export function autoLogin() {
    return dispatch => {
        const token = localStorage.getItem('token')
        if (!token) {
            dispatch(logout())
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'))
            if (expirationDate <= new Date()) {
                dispatch(logout)
            } else {
                dispatch(authSuccess(token))
                const expirationTime = decodeToken(token).exp * 1000
                const tokenLiveTime = expirationTime - Date.now()
                dispatch(autoLogout(tokenLiveTime))
            }

        }
    }
}