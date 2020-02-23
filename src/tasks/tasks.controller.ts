import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, Partiale, TaskStatus } from './task.model';
import { thistle } from 'color-name';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {

    }

    @Get()
    getAllTasks(): Task[] {
        return this.tasksService.getAllTasks();
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string): Task {
        return this.tasksService.getTaskById(id)
    }

    @Post()
    createTask(
        @Body() createTaskDto: CreateTaskDto,
        @Body('title') titleParam: string,
        @Body('description') descriptionParam: string,

        ): Task {
        console.log({CreateTaskDto, titleParam, descriptionParam})
        const status = TaskStatus.OPEN
        const { title, description } = createTaskDto
        const task: Partiale<Task> = {
            title,
            description,
            status
        }
        return this.tasksService.createTask(createTaskDto);
    }

    @Delete('/:id')
    deleteTask(@Param('id') id: string): Task[] {
        return this.tasksService.deleteTask(id)
    }
}
