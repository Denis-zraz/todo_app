import React, { useState } from 'react';
import './NewTasksForm.css';
import { ICreateTask } from '../../interface/taskInterface';

export default function NewTasksForm({ createTask }: ICreateTask): JSX.Element {
    const [valueForm, setValueForm] = useState<string>();

    const handleChangeForm = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setValueForm(evt.target.value);
    };

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        if (typeof valueForm !== 'undefined' && valueForm.trim() !== '') {
            createTask(valueForm);
            setValueForm('');
        }
    };

    return (
        <header className="header">
            <h1>todos</h1>
            <form onSubmit={(evt) => handleSubmit(evt)} className="new-todo-form">
                <button type="submit" hidden aria-hidden />
                <input
                    className="new-todo"
                    type="text"
                    name="valueForm"
                    value={valueForm}
                    placeholder="What needs to be done?"
                    onChange={(evt) => handleChangeForm(evt)}
                    autoFocus
                    required
                />
            </form>
        </header>
    );
}
