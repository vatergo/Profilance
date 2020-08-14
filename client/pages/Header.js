import React, { Component } from 'react';
import { withStyles, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { openAuth, exit } from '../redux/actions';


class Header extends Component {
    render() {
        const { classes, user, openAuth, exit } = this.props;

        return (
            <>
                <div className={classes.header}>
                    <div className={classes.title} style={{ justifyContent: 'flex-start' }}>
                        <Link to={'/home'} className={classes.link}>
                            <Button
                                className={classes.button}>
                                Главная
                            </Button>
                        </Link>
                        <Link to={'/news'} className={classes.link}>
                            <Button
                                className={classes.button}>
                                Новости
                            </Button>
                        </Link>
                    </div>
                    <div className={classes.title} style={{ justifyContent: 'flex-end' }}>
                        {user.guest
                            ? <Button
                                className={classes.button}
                                onClick={openAuth}>
                                Авторизация
                            </Button>
                            : <Button
                                className={classes.button}
                                onClick={exit}>
                                Выйти
                        </Button>}
                    </div>
                </div>
                <div className={classes.divider}>.</div>
            </>
        );
    }
}

const styles = {
    header: {
        background: 'white',
        width: 1090,
        height: 120,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    logo: {
        height: 120,
    },
    title: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    divider: {
        width: '100%',
        height: 1,
        background: '#7c6d72',
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
    },
    button: {
        color: 'inherit',
        textTransform: 'none',
        fontSize: 'medium',
    },
};

const mapDispatchToProps = {
    openAuth,
    exit,
};

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header));