import { CREATE_NEWS, APROVE_NEWS, DELETE_NEWS } from "./types";

const initialState = {
    news: [{
        creator: 'admin',
        id: 'x23m2tmo8r',
        title: 'Тестовая новость',
        description: 'Описание',
        date: '01.01.2001',
        aprove: true,
    }, {
        creator: 'admin',
        id: 'x0iyrmzuj7',
        title: 'Вторая новость',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        date: '01.01.2001',
        aprove: false,
    }],
}

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_NEWS:
            return { ...state, news: [action.payload, ...state.news] }
        case APROVE_NEWS:
            return {
                ...state, news: state.news.map((item) => {
                    if (item.id === action.payload.id) {
                        return { ...item, aprove: true };
                    }
                    return item;
                })
            }
        case DELETE_NEWS:
            return { ...state, news: state.news.filter((item) => item.id !== action.payload.id) }
        default: return state;
    }
}