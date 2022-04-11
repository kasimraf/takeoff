import React, {useEffect} from 'react';
import styles from './main.module.css'
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";

const Main = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!props.authStatus) {
            navigate('./login')
        }
    }, [props.authStatus])
    return (
        <div>
            Main
        </div>
    );
};

export default connect(
    state => ({
        authStatus: state.user.authStatus
    }),
    dispatch => ({})
)(Main);