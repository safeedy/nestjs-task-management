import { Injectable } from '@nestjs/common';
import { Task, TaskStatus, Partiale } from './task.model';
import * as uuid from 'uuid/v1';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    getTaskById(id: string): Task {
        return this.tasks.find(task => task.id === id)
    }

    createTask(title: string, description: string, status: TaskStatus): Task;
    createTask<T extends Partiale<Task>>(inputTask?: T): Task;
    createTask<T extends Partiale<Task>>(param1: T | string, description?: string, status?: TaskStatus): Task {
        const task: Task = {
            id: uuid(),
            title: (typeof param1 === "string") ? param1 : param1.title,
            description: (typeof param1 === "string") ? description : param1.description,
            status: (typeof param1 === "string") ? status : param1.status
        }

        this.tasks = [...this.tasks, task]

        return task;
    }
}
