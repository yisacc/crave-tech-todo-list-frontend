import React, {useState} from "react";
import { IoIosAdd } from "react-icons/io";
import {useMutation} from "@apollo/client";
import {CREATE_SUB_TASK} from "../graphql/create-sub-task";
import {UPDATE_TASK} from "../graphql/update_task";
import {GET_TASKS} from "../graphql/get_tasks";

const AddNewTask = ({id}:{id:string}) => {
    const [addingNewSubTask, setAddingNewSubTask] = useState(false);
    const [newSubTaskTitle, setNewSubTaskTitle] = useState("");
    const [createSubTask, { data, loading, error }] = useMutation(CREATE_SUB_TASK);
    const [updateTask, { data:updateData, loading:updateLoading, error:updateError }] = useMutation(UPDATE_TASK,{refetchQueries: [
            GET_TASKS,
            'tasks'
        ],
    });
    const toggleAddingNewTask = () => {
        setAddingNewSubTask(!addingNewSubTask);
    };
    const reset = () => {
        setNewSubTaskTitle("");
        setAddingNewSubTask(false);
    };
    const handleAddTask=()=>{
        createSubTask({variables: {
                name: newSubTaskTitle,
            }})
            .then((response:any)=> {
                console.log({
                    id:id,
                    subTask:response?.data?.createSubTask?._id
            })
                updateTask({variables:{
                    id:id,
                    subTask:response?.data?.createSubTask?._id
                }}).then((response)=>{

                })
                 .catch(err=>console.log(err))
                }
            )
            .catch(error=>{
                console.log(error)
            })
    }
    return (
        <div className="w-full h-14">
            {addingNewSubTask && (
                <div className="flex flex-row justify-between items-center border-blue-500 border-2 rounded-md my-1 transition-all ease-in delay-150 duration-300">
                <input
                    type="text"
                className="w-full bg-white text-sm text-gray-500 m-1 px-2 flex-1 focus:outline-none"
                placeholder="new task"
                value={newSubTaskTitle}
                onChange={(e) => setNewSubTaskTitle(e.target.value)}
                onKeyDown={(e) => {
                if (e.key === "Enter") {
                    handleAddTask()
                    reset();
                }
    }}
    />
    <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-sm"
    onClick={() => {
        handleAddTask()
        reset();
    }}
>
    <IoIosAdd size={14} />
    </button>
    </div>
)}
    <button
        title="add-new-task"
    className="w-full h-8 text-sm bg-gray-100 rounded-sm border-dotted border-2 border-gray-300 hover:bg-gray-300"
    onClick={toggleAddingNewTask}
        >
        {addingNewSubTask ? "Cancel" : "Add new task"}
        </button>
        </div>
);
};

export default AddNewTask;
