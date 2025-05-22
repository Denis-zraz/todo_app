import React, { useState } from 'react';
import './NewTasksForm.css';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { createTask } from '../../slices/tasksSlices';

export default function NewTasksForm(): JSX.Element {
    const [valueForm, setValueForm] = useState<string>('');
    const dispatch = useDispatch();

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        if (typeof valueForm !== 'undefined' && valueForm.trim() !== '') {
            const newTask = {
                idTask: uuidv4(),
                task: valueForm,
                active: true,
            };
            dispatch(createTask(newTask));
            setValueForm('');
        }
    };

    return (
        <header className="header">
            <h1>todos</h1>
            <form onSubmit={(evt) => handleSubmit(evt)} className="new__todo__form">
                <button type="submit" hidden aria-hidden />
                <input
                    className="new__todo"
                    type="text"
                    name="valueForm"
                    value={valueForm}
                    placeholder="What needs to be done?"
                    onChange={(evt) => setValueForm(evt.target.value)}
                    autoFocus
                    required
                />
            </form>
        </header>
    );
}
