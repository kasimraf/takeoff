import React from 'react';
import styles from './registration.module.css'
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

const Registration = () => {
    return (
        <div className={styles.page}>
            <Paper className={styles.paper} elevation={3}>
                <Typography variant="h6" gutterBottom component="div">
                    Создать аккаунт
                </Typography>
                <form autoComplete="off" action="">
                    <FormControl variant="standard" sx={{m: 2, minWidth: 120, width: '40ch'}}>
                        <TextField
                            id="outlined-basic"
                            label="Имя"
                            variant="standard"
                        />
                    </FormControl><FormControl variant="standard" sx={{m: 2, minWidth: 120, width: '40ch'}}>
                        <TextField
                            id="outlined-basic"
                            label="Логин"
                            variant="standard"
                        />
                    </FormControl>
                    <FormControl variant="standard" sx={{m: 2, minWidth: 120, width: '40ch'}}>
                        <TextField
                            id="outlined-basic"
                            label="Пароль"
                            variant="standard"
                        />
                    </FormControl>
                    <FormControl variant="standard" sx={{m: 2, minWidth: 120, width: '40ch'}}>
                        <Button type="submit" variant="contained">Регистрация</Button>
                    </FormControl>
                </form>
                <Typography variant="body2" gutterBottom>
                    Ещё есть аккаунт?
                </Typography>
                <Typography variant="body2" gutterBottom>
                    <Link className={styles.routerLink} to='/login'>Войти</Link>
                </Typography>
            </Paper>
        </div>
    );
};

export default Registration;