import React, { Component } from 'react';
import { withStyles, TextField, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { createNews } from '../redux/actions'

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
        };
    }

    createNews() {
        const { title, description } = this.state;
        const { user } = this.props;
        this.props.createNews({
            id: Math.random().toString(36).substring(2),
            creator: user.login,
            title,
            description,
            date: new Date().toLocaleString().split(',')[0],
            aprove: false,
        });
        this.setState({ title: '', description: '' })
    }

    render() {
        const { classes } = this.props;
        const { title, description } = this.state;

        return (
            <>
                <h1>Добавление новостей</h1>
                <TextField
                    className={classes.textField}
                    value={title}
                    variant='outlined'
                    fullWidth
                    label="Заголовок"
                    onChange={({ target }) => this.setState({ title: target.value })} />
                <TextField
                    className={classes.textField}
                    value={description}
                    multiline
                    rows={4}
                    variant='outlined'
                    fullWidth
                    label="Описание"
                    onChange={({ target }) => this.setState({ description: target.value })} />
                <Button
                    className={classes.button}
                    onClick={this.createNews.bind(this)}
                    variant='contained'
                    color="secondary">
                    Добавить
                </Button>
                <Button
                    className={classes.button}
                    onClick={() => this.setState({ title: '', description: '' })}
                    variant='contained'
                    color="secondary">
                    Очистить
                </Button>
            </>
        );
    }
}

const styles = {
    button: {
        marginRight: 15,
    },
    textField: {
        marginBottom: 15,
    },
    card: {
        minWidth: 275,
    },
    date: {
        fontSize: 14,
    },
};

const mapDispatchToProps = {
    createNews,
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(News));
