"use client"
import React, { useEffect } from 'react'
import { Task } from '@/interfaces/interfaces'
import axios from 'axios';
import swal from 'sweetalert';
import { useDispatch } from 'react-redux';
import { getTasks } from '@/redux/actions/action';

function Card(props: Task) {
    const dispatch = useDispatch();

    const handleDeleteClick = async () => {
        try {
            swal({
                title: "Estás seguro?",
                text: "No podrás recuperar los datos!",
                icon: "warning",
                buttons: ["Cancel", "Delete"],
                dangerMode: true,
            })
                .then(async (willDelete) => {
                    if (willDelete) {
                        // El usuario confirmó la eliminación, entonces aquí puedes eliminar la tarea
                        const response = await axios.delete(`https://todo-list-65xp.onrender.com/task/eliminar/${props.id}`);
                        if (response.status === 200) {
                            // Tarea eliminada con éxito
                            swal("Listo, tarea eliminada!", {
                                icon: "success",
                            });
                        } else {
                            // Manejar cualquier error al eliminar la tarea
                            swal("Error al eliminar la tarea.");
                        }
                    } else {
                        // El usuario canceló la eliminación
                        swal("No eliminaste la tarea.");
                    }
                });
        } catch (error) {
            console.error("Error al eliminar la tarea:", error);
        }
    };

    useEffect(() => {
        handleDeleteClick
        dispatch(getTasks());
    }, [dispatch, handleDeleteClick]);
    return (
        <div className='  bg-slate text-negro rounded-md flex justify-center flex-col w-56 p-1 m-1'>
            <div className=' flex flex-col justify-center  text-center'>
                <h1>{props.title}</h1><br />
                <p>{props.description}</p><br />
                <br />
                <p>Mas detalles</p>
                <button className=" bg-rojo rounded-md" onClick={handleDeleteClick}>eliminar tarea</button>
            </div>
        </div>
    )
}

export default Card