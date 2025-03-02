import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { productsApi } from '@queries';

const rootReducer = combineReducers({
	[productsApi.reducerPath]: productsApi.reducer,
});

const middlewares = [productsApi.middleware];

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(...middlewares),
});
