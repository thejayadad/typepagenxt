import TaskForm from '@/components/task-form'
import React from 'react'
import { Task } from '@prisma/client'
import { createTask } from '@/lib/actions/add-task';
import { updateTask } from '@/lib/actions/update-task';
import Box from '@/components/box';

const NewTaskPage = () => {
  return (
    <section className='py-6'>
        <Box>
          <div className='w-full  flex flex-col'>
              <h1>New Tasks</h1>
              <p>Add a new task below</p>
              <TaskForm />
          </div>
        </Box>
    </section>
  )
}

export default NewTaskPage