import { ITaskListProps } from '../../interface/taskInterface';
import Task from '../Task/Task';
import './TaskList.css';

export default function TasksList({ data }: ITaskListProps) {
    return (
        <ul className="todo__list">
            {data &&
                data.map((item) => {
                    return <Task key={item.idTask} item={item} />;
                })}
        </ul>
    );
}
