import React, {useEffect, useState} from "react";
import TaskListCard from "./TaskListCard";
import {ApolloClient, ApolloLink, ApolloProvider, HttpLink, InMemoryCache, useQuery} from "@apollo/client";
import {GET_TASKS} from "../graphql/get_tasks";
import TaskCompletedMessage from "./TaskCompletedMessage";

const httpLink = new HttpLink({
    uri: "https://48p1r2roz4.sse.codesandbox.io",
});
const customClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([httpLink]),
});

const TaskListContainer = () => {
    const { data } = useQuery(GET_TASKS);
    const [tasksCompleted,setTasksCompleted]=useState(false)
useEffect(()=>{
    const tasks=data?.tasks;
    let notCompleted = tasks?.filter((eachVal:any) => {
        let opt = eachVal.subTasks.some(({isCompleted}:{isCompleted:boolean})=>!isCompleted);
        return opt;
    })
    if(notCompleted?.length==0){
        setTasksCompleted(true)
    }else {
        setTasksCompleted(false)
    }
},[data])
    return (
        <div className="w-82 bg-zinc-100 border-2 border-gray-100 rounded-sm shadow-md p-1">
            <div className="m-4 p-4 flex flex-col items-center justify-content-start bg-white">
                <div className="w-64 h-8 bg-white">
                    <h1 className="font-semibold text-lg">My Startup Progress</h1>
                </div>
                {data?.tasks.map((task:any, index:number) => (
                    <TaskListCard key={task._id} {...{ ...task, index }} />
                ))}
                {tasksCompleted && <ApolloProvider client={customClient}>
                    <TaskCompletedMessage/>
                </ApolloProvider>
                }
            </div>
        </div>
    );
};


export default TaskListContainer;
