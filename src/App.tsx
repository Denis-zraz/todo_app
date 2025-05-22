import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import NewTasksForm from './components/NewTasksForm';
import { ITask } from './interface/taskInterface';
import dataTasks from './defaultData';
import TasksList from './components/TasksList';

function App(): JSX.Element {
    const [tasks, setTasks] = useState<ITask[]>(dataTasks);
    const [filterTasks, setfilterTasks] = useState(tasks);

    useEffect(() => {
        setfilterTasks(tasks);
    }, [tasks]);

    const createTask = (valueForm: string) => {
        setTasks((prevTasks) => [
            ...prevTasks,
            {
                idTask: uuidv4(),
                task: valueForm,
                active: true,
            },
        ]);
    };

    return (
        <section className="todoapp">
            <NewTasksForm createTask={createTask} />
            <section className="main">
                <TasksList data={filterTasks} />
            </section>
        </section>
    );
}

export default App;
