import { CREATE_NEWS, APROVE_NEWS, DELETE_NEWS, LOGIN, EXIT, OPEN_AUTH, CLOSE_AUTH, CLOSE_SNACKBAR } from "./types";

export function createNews(news) {
    return {
        type: CREATE_NEWS,
        payload: news,
    }
}

export function aproveNews(news) {
    return {
        type: APROVE_NEWS,
        payload: news,
    }
}

export function deleteNews(news) {
    return {
        type: DELETE_NEWS,
        payload: news,
    }
}

export function login(user) {
    return {
        type: LOGIN,
        payload: user,
    }
}

export function exit(user) {
    return {
        type: EXIT,
        payload: user,
    }
}

export function openAuth() {
    return {
        type: OPEN_AUTH,
    }
}

export function closeAuth() {
    return {
        type: CLOSE_AUTH,
    }
}

export function closeSnackbar() {
    return {
        type: CLOSE_SNACKBAR,
    }
}