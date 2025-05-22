import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTask } from '../../slices/tasksSlices';
import { IChangeProps } from '../../interface/taskInterface';

export default function ChangeForm({ changeClassName, data }: IChangeProps): JSX.Element {
    const { idTask, task } = data;
    const [text, setText] = useState<string>(task);
    const dispatch = useDispatch();

    const createUpdateTask = () => {
        if (typeof text !== 'undefined' && text.trim() !== '') {
            dispatch(updateTask({ idTask, text }));
            changeClassName();
        }
    };

    return (
        <form onSubmit={createUpdateTask}>
            <input type="text" className="edit" value={text} onChange={(evt) => setText(evt.target.value)} required />
        </form>
    );
}
