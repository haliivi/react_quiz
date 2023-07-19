import Layout from './hoc/Layout/Layout';
import Quiz from './containers/Quiz/Quiz';
import { Routes, Route, Navigate } from 'react-router-dom';
import QuizList from './containers/QuizList/QuizList';
import Auth from './containers/Auth/Auth';
import QuizCreator from './containers/QuizCreator/QuizCreator';
import { connect } from 'react-redux';
import Logout from './components/Logout/Logout';
import { useEffect } from 'react';
import { autoLogin } from './store/actions/auth';

function App(props) {
    let routes = (
        <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/quiz/:id" element={<Quiz />} />
            <Route path="/" element={<QuizList />} />
            <Route path='*' element={<Navigate to='/' replace/>} />
        </Routes>
    )

    if (props.isAuthenticated) {
        routes = (
            <Routes>
                <Route path='/quiz-creator' element={<QuizCreator />} />
                <Route path='/quiz/:id' element={<Quiz />} />
                <Route path='/' element={<QuizList />} />
                <Route path='/logout' element={<Logout />} />
                <Route path='*' element={<Navigate to='/' replace/>} />
            </Routes>
        )
    }

    useEffect(() => {
        props.autoLogin()
    })

    return (
        <Layout>
            {routes}
        </Layout>
    );
}

function mapStateToProps (state) {
    return {
        isAuthenticated: !!state.auth.token
    }
}

function mapDispatchToProps (dispatch) {
    return {
        autoLogin: () => dispatch(autoLogin())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
