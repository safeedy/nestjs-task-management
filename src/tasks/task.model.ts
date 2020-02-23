export interface Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus
}

export enum TaskStatus {
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE'
}

export type Partiale<T> = {
    [P in keyof T]?: T[P]
}