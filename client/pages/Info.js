import React, { Component } from 'react';
import { Snackbar, IconButton } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import { connect } from 'react-redux';
import { closeSnackbar } from '../redux/actions';

class Info extends Component {
    render() {
        const { closeSnackbar, snackbar } = this.props;

        return (
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                open={!!snackbar}
                autoHideDuration={15000}
                onClose={closeSnackbar}
                message={snackbar}
                action={
                    <React.Fragment>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={closeSnackbar}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                } />
        );
    }
}

const mapDispatchToProps = {
    closeSnackbar,
};

const mapStateToProps = (state) => {
    return {
        snackbar: state.auth.snackbar,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Info);