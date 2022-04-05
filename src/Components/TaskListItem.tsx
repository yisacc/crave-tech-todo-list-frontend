import React, { useEffect } from "react";
import {useMutation} from "@apollo/client";
import {UPDATE_SUB_TASK_STATUS} from "../graphql/update-sub-task-status";
import {GET_TASKS} from "../graphql/get_tasks";

interface Props {
    _id:string,
    name:string,
    isCompleted:boolean

}

const TaskListItem = ({ _id, name, isCompleted }:Props) => {
    const [updateSubTaskStatus, { data, loading, error }] = useMutation(UPDATE_SUB_TASK_STATUS, {
        refetchQueries: [
            GET_TASKS,
            'tasks'
        ],
    });
    const handleClick = (e:any) => {
        updateSubTaskStatus({variables: {
                id: _id,
                isCompleted: !isCompleted,
            }})
            .then(response=> {
                }
            )
            .catch(error=>{
                console.log(error)
            })
    };
    return (
        <div className="flex justify-start items-center my-1">
            <input
                id={_id}
                className="w-4 h-4 accent-blue-800"
                type="checkbox"
                checked={isCompleted}
                onChange={handleClick}
            />
            <span title="task-item" className="text-sm flex-1 mx-2">
        {name}
      </span>
        </div>
    );
};

export default TaskListItem;
