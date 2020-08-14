import React, { Component } from 'react';
import Header from './Header';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Auth from './Auth';
import useRoutes from '../routes';
import { Box } from '@material-ui/core';
import Info from './Info';

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        background: 'white',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    layout: {
        width: 1090,
    },
};

class Layout extends Component {
    render() {
        const { classes, user } = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.header}>
                    <Header />
                    <Auth />
                    <Info />
                </div>
                <Box className={classes.layout}>
                    {useRoutes(user)}
                </Box>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
    }
}

export default connect(mapStateToProps, null)(withStyles(styles)(Layout));