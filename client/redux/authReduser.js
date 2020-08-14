import { LOGIN, EXIT, OPEN_AUTH, CLOSE_AUTH, CLOSE_SNACKBAR } from "./types";

const Users = [
    {
        login: 'vatergo',
        password: 'qwerty',
    }, {
        login: 'admin',
        password: 'admin',
        isAdmin: true,
    },
];

const initialState = {
    user: { login: 'Гость', guest: true },
    isOpenAuth: false,
    snackbar: '',
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            let currentUser = Users.filter((user) => user.login === action.payload.login);
            if (currentUser.length === 0) {
                return { ...state, snackbar: 'Пользователя с таким логином не существует' };
            }
            if (Users.filter((user) => user.login === action.payload.login)[0].password === action.payload.password) {
                return { ...state, user: currentUser[0], isOpenAuth: false };
            }
            return { ...state, snackbar: 'Неверный пароль' };
        case EXIT:
            return { ...state, user: { login: 'Гость', guest: true } };
        case OPEN_AUTH:
            return { ...state, isOpenAuth: true };
        case CLOSE_AUTH:
            return { ...state, isOpenAuth: false };
        case CLOSE_SNACKBAR:
            return { ...state, snackbar: '' }
        default: return state;
    }
}