import '@testing-library/jest-dom';
// @ts-expect-error - для тестов необходим импорт React, но он не используется
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import store from '../../store/store';
import NewTasksForm from './NewTasksForm.tsx';

describe('Testing sum', () => {
    // тестируем наличие заголовка в компоненте
    test('title is in the document', () => {
        render(
            <Provider store={store}>
                <NewTasksForm />
            </Provider>,
        );
        const title = screen.getByText(/todos/i);
        expect(title).toBeInTheDocument();
    });

    // имитируем действие пользователя по вводу данных
    it('input', async () => {
        render(
            <Provider store={store}>
                <NewTasksForm />
            </Provider>,
        );
        const inputElement = screen.getByTestId('valueForm');
        await userEvent.type(inputElement, 'сделать дело');

        expect(inputElement).toHaveValue('сделать дело');
    });

    // тестируем вывод сообщения об ошибке при вводе пустого todo
    test('error', () => {
        render(
            <Provider store={store}>
                <NewTasksForm />
            </Provider>,
        );

        const submitButton = screen.getByTestId('button');
        fireEvent.click(submitButton);

        const errorMessage = screen.queryByText(/\*Это поле обязательно к заполнению/i);
        expect(errorMessage).toBeInTheDocument();
    });
});
