export interface ITask {
    idTask: string;
    task: string;
    active: boolean;
}

export interface IRootState {
    tasks: ITask[];
}

export interface ICreateTask {
    createTask: (valueForm: string) => void;
}

export interface ITaskListProps {
    data: ITask[];
}

export interface TaskProps {
    item: ITask;
    deletTask: (idTask: string) => void;
    toggleChecked: (idTask: string) => void;
    updateTask: (idTask: string, text: string) => void;
}

// export interface I
