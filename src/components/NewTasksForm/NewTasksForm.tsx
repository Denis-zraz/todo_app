import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { createTask } from '../../slices/tasksSlices';
import './NewTasksForm.css';

export default function NewTasksForm(): JSX.Element {
    const [valueForm, setValueForm] = useState<string>('');
    const [errors, setErrors] = useState<boolean>(false);
    const dispatch = useDispatch();

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        if (typeof valueForm !== 'undefined' && valueForm.trim() !== '') {
            setErrors(() => false);
            const newTask = {
                idTask: uuidv4(),
                task: valueForm,
                active: true,
            };
            dispatch(createTask(newTask));
            setValueForm('');
        } else if (valueForm.trim() === '') {
            setErrors((prev) => !prev);
        }
    };

    const validateErrors = !errors ? 'new__todo' : 'errors-border';

    return (
        <header className="header">
            <h1>todos</h1>
            <form id="form" onSubmit={(evt) => handleSubmit(evt)} className="new__todo__form">
                <button data-testid="button" type="submit" hidden aria-hidden />
                <input
                    className={validateErrors}
                    type="text"
                    name="valueForm"
                    data-testid="valueForm"
                    value={valueForm}
                    placeholder="What needs to be done?"
                    onChange={(evt) => setValueForm(evt.target.value)}
                    autoFocus
                />
            </form>
            {errors && <span className="errors">*Это поле обязательно к заполнению</span>}
        </header>
    );
}
