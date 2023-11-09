"use client"

import React, { FormEventHandler, useEffect, useState } from 'react'
import { Task } from '@/interfaces/interfaces'
import axios from 'axios'

function CreateTasks() {

    const [create, setCreate] = useState<Task>({
        title: "",
        description: "",
        done: false
    })

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`https://todo-list-65xp.onrender.com/task/create`, create)
            return response
        } catch (error) {
            alert("error al crear la tarea")
        }
    }


    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setCreate({
            ...create,
            [e.target.name]: e.target.value
        })
    }
    const handleSelectChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCreate({
            ...create,
            [e.target.name]: e.target.value
        });
    }
    const handleTextAreaChange = async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCreate({
            ...create,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className=' bg-slate m-1 rounded-md p-4'>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">Titulo:</label>
                <br />
                <input className=" rounded-md" type="text" name='title' value={create.title} onChange={handleChange} placeholder='coloca el titulo...' />
                <br />
                <label htmlFor="">Descripcion de la tarea:</label>
                <br />
                <textarea cols={30} rows={10} className=" rounded-md"  name='description' value={create.description} onChange={handleTextAreaChange} placeholder='coloca la descripcion...'></textarea>
                <br />
                <label htmlFor="">Estado:</label>
                <br />
                <select
                    className=" rounded-md"
                    name="done"
                    value={create.done.toString()} // Convertir a cadena
                    onChange={handleSelectChange}
                >
                    <option value="true">True</option>
                    <option value="false">False</option>
                </select>
                <br />
                <div className=' flex justify-center m-9'>
                    <button type='submit' className=' bg-white rounded-md'>ENVIAR</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTasks