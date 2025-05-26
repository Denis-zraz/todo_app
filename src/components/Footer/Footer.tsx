import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IFooterProps } from '../../interface/taskInterface';
import { clearTasksCompleted } from '../../slices/tasksSlices';
import './Footer.css';

export default function Footer({ activeTasks, updateStatus }: IFooterProps) {
    const [classActive, setClassActive] = useState({
        all: 'selected',
        itemActive: '',
        itemCompleted: '',
    });
    const dispatch = useDispatch();
    const { all, itemActive, itemCompleted } = classActive;

    // делаем кнопку активной
    const handleChangeStatus = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const valueStatus = evt.currentTarget.id;
        if (valueStatus === 'All') {
            setClassActive({
                all: 'selected',
                itemActive: '',
                itemCompleted: '',
            });
        } else if (valueStatus === 'Active') {
            setClassActive({
                all: '',
                itemActive: 'selected',
                itemCompleted: '',
            });
        } else if (valueStatus === 'Completed') {
            setClassActive({
                all: '',
                itemActive: '',
                itemCompleted: 'selected',
            });
        }
        updateStatus(valueStatus);
    };

    return (
        <footer className="footer">
            <span className="todo__count">{activeTasks} items left</span>
            <ul className="filters">
                <li>
                    <button
                        type="button"
                        title='"All"'
                        id="All"
                        className={all}
                        onClick={(evt) => handleChangeStatus(evt)}
                    >
                        All
                    </button>
                </li>
                <li>
                    <button type="button" id="Active" className={itemActive} onClick={(evt) => handleChangeStatus(evt)}>
                        Active
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        id="Completed"
                        className={itemCompleted}
                        onClick={(evt) => handleChangeStatus(evt)}
                    >
                        Completed
                    </button>
                </li>
            </ul>
            <button type="button" className="clear-completed" onClick={() => dispatch(clearTasksCompleted())}>
                Clear completed
            </button>
        </footer>
    );
}
