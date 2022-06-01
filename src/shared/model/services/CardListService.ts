import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CardList } from '../types/CardListTypes';

export const cardListApi = createApi({
    reducerPath: 'cardListApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://cors-anywhere.herokuapp.com/https://bonus-test.evoapp.ru/api/3rdparty/',
        prepareHeaders: (headers) => {
            headers.set('Authorization', 'b7d5ea70-5290-4d3c-9dd0-722d74ef9960');
            headers.set('Content-Type', 'application/json');
            headers.set('Accept', 'application/json');
            return headers;
        },
    }),
    endpoints: (build) => ({
        fetchAllCards: build.query<CardList[], undefined>({
            query: () => ({
                url: '/card',
            }),
        }),
    }),
});
