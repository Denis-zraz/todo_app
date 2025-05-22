import { useEffect, useState } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import NewTasksForm from './components/NewTasksForm';
import { ITask, IRootState } from './interface/taskInterface';
import TasksList from './components/TasksList';

function App(): JSX.Element {
    const tasks = useSelector((state: IRootState) => state.tasks);
    const [filterTasks, setfilterTasks] = useState<ITask[]>([]);

    useEffect(() => {
        setfilterTasks(tasks);
    }, [tasks]);

    return (
        <section className="todoapp">
            <NewTasksForm />
            <section className="main">
                <TasksList data={filterTasks} />
            </section>
        </section>
    );
}

export default App;
