import React from "react";
import TaskListCard from "./TaskListCard";
import {ApolloClient, ApolloLink, ApolloProvider, HttpLink, InMemoryCache, useQuery} from "@apollo/client";
import {GET_EXCHANGE_RATES} from "../graphql/get-exchange-rates";
import {GET_TASKS} from "../graphql/get_tasks";

const httpLink = new HttpLink({
    uri: "https://48p1r2roz4.sse.codesandbox.io",
});
const customClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([httpLink]),
});

const TaskListContainer = () => {
    const { data, loading, error } = useQuery(GET_TASKS);
    return (
        <div className="w-82 bg-zinc-100 border-2 border-gray-100 rounded-sm shadow-md p-1">
            <div className="m-4 p-4 flex flex-col items-center justify-content-start bg-white">
                <div className="w-64 h-8 bg-white">
                    <h1 className="font-semibold text-lg">My Startup Progress</h1>
                </div>
                {data?.tasks.map((task:any, index:number) => (
                    <TaskListCard key={task._id} {...{ ...task, index }} />
                ))}
                <ApolloProvider  client={customClient}>
                <QueryOverridingClient />
                </ApolloProvider >
            </div>
        </div>
    );
};


const QueryOverridingClient=()=>{
    const { data, loading, error } = useQuery(GET_EXCHANGE_RATES);
    if (loading) return <div>Loading...</div>;
    return (
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="font-semibold text-lg">
                            You have completed all tasks.
                        </h1>
                        <h1 className="font-semibold text-lg">
                            You have earned 100 {data?.currency}.
                        </h1>
                    </div>

    );
}
export default TaskListContainer;
