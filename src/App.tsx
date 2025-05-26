import { useEffect, useState } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import NewTasksForm from './components/NewTasksForm';
import { ITask, IRootState } from './interface/taskInterface';
import TasksList from './components/TasksList';
import Footer from './components/Footer';

function App(): JSX.Element {
    const tasks = useSelector((state: IRootState) => state.tasks);
    const [filterTasks, setfilterTasks] = useState<ITask[]>([]);
    const activeTasks: number = tasks.filter((elem) => elem.active).length;

    useEffect(() => {
        setfilterTasks(tasks);
    }, [tasks]);

    const updateStatus = (status: string) => {
        let updateCallbuck;
        if (status === 'Active') {
            updateCallbuck = tasks.filter((item) => item.active);
        } else if (status === 'Completed') {
            updateCallbuck = tasks.filter((item) => !item.active);
        } else {
            updateCallbuck = tasks;
        }
        setfilterTasks(updateCallbuck);
    };

    return (
        <section className="todoapp">
            <NewTasksForm />
            <section className="main">
                <TasksList data={filterTasks} />
            </section>
            <Footer activeTasks={activeTasks} updateStatus={updateStatus} />
        </section>
    );
}

export default App;
