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
        updateTask(state, { payload }) {
            const { idTask, text } = payload;
            return state.map((elem) => (elem.idTask === idTask ? { ...elem, task: text } : { ...elem }));
        },
        deletTask(state, { payload }) {
            return state.filter((item) => item.idTask !== payload);
        },
        toggleChecked(state, { payload }) {
            const st = state.map((elem) => (elem.idTask === payload ? { ...elem, active: !elem.active } : { ...elem }));
            return st;
        },
    },
});

export const { createTask, updateTask, deletTask, toggleChecked } = TasksSlice.actions;
export default TasksSlice.reducer;
