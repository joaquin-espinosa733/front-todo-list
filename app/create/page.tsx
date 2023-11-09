import React from 'react'
import CreateTasks from '@/components/createTasks/CreateTasks'
import NavBar from '@/components/NavBar/NavBar'
export const metadata = {
    title: "Create tasks"
  };

function CreateTask() {
    return (
        <div>
            <section className='flex flex-col items-center h-0'>
                <CreateTasks />
            </section>
            <NavBar />
        </div>
    )
}

export default CreateTask