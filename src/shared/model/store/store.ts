import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { cardListApi } from '../services/CardListService';

const rootReducer = combineReducers({
    [cardListApi.reducerPath]: cardListApi.reducer,
});

export const setupStore = () => configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardListApi.middleware),
    });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
