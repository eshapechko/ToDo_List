import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./feature/todoListReducer";
import themeReducer from "./feature/themeReducer";
import logger from "redux-logger";
import { loadFromLocalStorage, saveToLocalStorage } from "./helpers/storage";

export const store = configureStore({
    reducer: {
        todoList: todoReducer,
        themeList: themeReducer,
    },
    preloadedState: loadFromLocalStorage(),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

store.subscribe(() => saveToLocalStorage(store.getState()));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
