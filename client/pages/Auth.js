import React, { Component } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { login, closeAuth } from '../redux/actions';

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
        }
    }

    onLogin() {
        const { login, password } = this.state;
        this.props.login({ login, password });
        this.setState({ login: '', password: '' })
    }

    render() {
        const { classes, isOpenAuth, closeAuth } = this.props;
        const { login, password } = this.state;
        return (
            <>
                <Dialog
                    open={isOpenAuth}>
                    <DialogTitle>
                        Авторизация
                    <IconButton className={classes.closeButton} onClick={closeAuth}>
                            <CloseIcon />
                        </IconButton>
                    </DialogTitle>
                    <DialogContent className={classes.content}>
                        <TextField
                            value={login}
                            variant='outlined'
                            fullWidth
                            label="Логин"
                            onChange={({ target }) => this.setState({ login: target.value })} />
                        <TextField
                            value={password}
                            style={{ marginTop: 10 }}
                            variant='outlined'
                            fullWidth
                            label="Пароль"
                            type="password"
                            onChange={({ target }) => this.setState({ password: target.value })} />
                    </DialogContent>
                    <DialogActions className={classes.actions}>
                        <Button
                            onClick={this.onLogin.bind(this)}
                            variant='contained'
                            color="secondary"
                            disabled={!(login.length > 1 && password.length > 1)}>
                            Войти
                        </Button>
                    </DialogActions>
                </Dialog>
            </>
        );
    }
}

const styles = {
    content: {
        width: 328,
    },
    actions: {
        padding: 20,
    },
    closeButton: {
        position: 'absolute',
        right: 7,
        top: 8,
    },
};

const mapDispatchToProps = {
    closeAuth,
    login,
};

const mapStateToProps = (state) => {
    return {
        isOpenAuth: state.auth.isOpenAuth,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Auth));