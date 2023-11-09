"use client"
import React, { useEffect } from 'react';
import Card from '../Card/Card';
import { Task } from '@/interfaces/interfaces';
import { useSelector, useDispatch } from "react-redux";
import { getTasks } from '@/redux/actions/action';

function Cards() {
    
    const tasks = useSelector((state: any) => state.tasks);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTasks());
    }, [dispatch]);

    return (
        <div className='flex flex-wrap justify-center items-center h-screen space-x-4'>
            {tasks.length > 0 ? (
                tasks.map((task: Task) => (
                    <div className="w-1/5 m-1" key={task.id}>
                        <Card
                            title={task.title}
                            description={task.description}
                            done={task.done}
                            id={task.id}
                        />
                    </div>
                ))
            ) : (
                <p className='text-white'>No hay tareas asignadas.</p>
            )}
        </div>
    );
}

export default Cards;
