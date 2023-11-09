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

    // Resto del código...

    return (
        <div className='flex items-center space-x-4 flex-col w-72 h-96 justify-center bg-white rounded-md overflow-auto mt-36 mx-96'>
            <div className=' mt-4'>
                {tasks.length > 0 ? (
                    tasks.map((task: Task) => (
                        <div className="w-1/5 m-1 transition-transform transform hover:scale-95" key={task.id}>
                            <Card
                                title={task.title}
                                description={task.description}
                                done={task.done}
                                id={task.id}
                            />
                        </div>
                    ))
                ) : (
                    <p className='text-black'>No hay tareas asignadas.</p>
                )}
            </div>
        </div>
    );
}

export default Cards;
