import { createSlice } from '@reduxjs/toolkit';
// import { ITaskListProps } from '../interface/taskInterface';
import { ITask } from '../interface/taskInterface';

const initialState: ITask[] = [
    {
        idTask: '1',
        task: 'Протестировать form',
        active: true,
    },
    {
        idTask: '2',
        task: 'Купить подарок',
        active: true,
    },
];

const TasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        createTask(state, { payload }) {
            state.push(payload);
        },
    },
});

export const { createTask } = TasksSlice.actions;
export default TasksSlice.reducer;
