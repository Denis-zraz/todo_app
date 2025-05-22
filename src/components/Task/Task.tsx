import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { deletTask, toggleChecked } from '../../slices/tasksSlices';
import ChangeForm from '../ChangeForm/ChangeForm';
import { ITaskProps } from '../../interface/taskInterface';

export default function Task({ item }: ITaskProps): JSX.Element {
    const dispatch = useDispatch();
    const { idTask, task, active } = item;
    const [changeClass, setChangeClass] = useState<boolean>(false);

    const handleChangeClass = () => {
        setChangeClass((prevTask) => !prevTask);
    };

    const description = active ? '' : 'description';
    const view = changeClass ? 'completed editing' : 'completed';

    return (
        <li className={view}>
            <div className="view">
                <input
                    id={idTask}
                    className="toggle"
                    type="checkbox"
                    checked={!active}
                    onChange={() => dispatch(toggleChecked(idTask))}
                />
                <label htmlFor={idTask}>
                    <span className={description}>{task}</span>
                </label>
                <button
                    type="button"
                    aria-label="Edit task"
                    className="icon icon-edit"
                    onClick={() => setChangeClass((prevTask) => !prevTask)}
                />
                <button
                    type="button"
                    aria-label="Delete task"
                    className="icon icon-destroy"
                    onClick={() => dispatch(deletTask(idTask))}
                />
            </div>
            {changeClass && <ChangeForm changeClassName={handleChangeClass} data={item} />}
        </li>
    );
}
