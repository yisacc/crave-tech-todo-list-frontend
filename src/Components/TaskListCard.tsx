import React, {useEffect, useState} from "react";
import { IoIosCheckmark } from "react-icons/io";
import TaskListItem from "./TaskListItem";
import AddNewTask from "./AddNewTask";

interface Props {
    _id:string,
    index:number,
    name:string,
    isLocked:boolean,
    subTasks:[{
        name:string,
        _id:string,
        isCompleted:boolean
    }]
}

const TaskListCard = ({ index,_id, name ,subTasks}:Props) => {
    const [isLocked,setIsLocked]=useState(false)
    useEffect(()=>{
        let unCompleted=subTasks.filter(subTask=>!subTask.isCompleted)
        if(unCompleted.length===0){
            setIsLocked(true)
        }else {
            setIsLocked(false)
        }
    },[subTasks])

    return (
        <div className="w-64 bg-white rounded-sm px-1 my-2">
            <div className="flex h-12 justify-between items-center my-1">
        <span
            title="task-number"
            className="bg-black rounded-full w-6 h-6 text-white text-center text-md font-normal"
        >
          {index + 1}
        </span>
                <h1 className="font-semibold text-md flex-1 mx-2">{name}</h1>
                {isLocked && (
                    <span className="font-bold" title="check-icon">
            <IoIosCheckmark size={64} />
          </span>
                )}
            </div>
            {subTasks.map((task,index) => (
                <TaskListItem
                    key={index}
                    {...{ ...task, ...{ parentId: _id }}}
                />
            ))}
            <AddNewTask id={_id} />
        </div>
    );
};

export default TaskListCard;
