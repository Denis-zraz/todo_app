export interface ITask {
    idTask: string;
    task: string;
    active: boolean;
}

export interface ICreateTask {
    createTask: (valueForm: string) => void;
}

export interface ITaskListProps {
    data: ITask[];
}
