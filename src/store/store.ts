import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import TasksSlice from '../slices/tasksSlices';

const store = configureStore({
    reducer: {
        tasks: TasksSlice,
    },
    // здесь прописываются middleware:
});

setupListeners(store.dispatch);

export default store;
