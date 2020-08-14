import React, { Component } from 'react';
import { Grid, withStyles, Card, CardContent, Typography, TextField, CardActions, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { aproveNews, deleteNews } from '../redux/actions'

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: this.props.news,
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.news.length !== prevProps.news.length) {
            this.setState({
                news: this.props.news,
            });
        }
    }

    onSearch({ target }) {
        if (target.value.length === 0) {
            this.setState({ news: this.props.news, })
        } else {
            this.setState({ news: this.state.news.filter((item) => item.title.includes(target.value) || item.description.includes(target.value)) })
        }
    }

    render() {
        const { classes, aproveNews, deleteNews } = this.props;
        const { news } = this.state;

        return (
            <>
                <h1>Список неодобренных новостей</h1>
                <TextField
                    className={classes.search}
                    variant='outlined'
                    fullWidth
                    onChange={this.onSearch.bind(this)}
                    label="Поиск" />
                <Grid>
                    {news.map((item) => <Card className={classes.card} variant='outlined' key={item.id}>
                        <CardContent>
                            <Typography className={classes.date} color="textSecondary" gutterBottom>
                                {item.date}
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {item.title}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {item.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={() => aproveNews(item)}>Одобрить</Button>
                            <Button size="small" onClick={() => deleteNews(item)}>Удалить</Button>
                        </CardActions>
                    </Card>)}
                </Grid>
            </>
        );
    }
}

const styles = {
    search: {
        marginBottom: 15,
    },
    card: {
        minWidth: 275,
        marginBottom: 15,
    },
    date: {
        fontSize: 14,
    },
};

const mapDispatchToProps = {
    aproveNews,
    deleteNews,
}

const mapStateToProps = (state) => {
    return {
        news: state.news.news.filter((item) => !item.aprove),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(News));
