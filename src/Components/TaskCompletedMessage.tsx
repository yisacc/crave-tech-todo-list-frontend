import {useQuery} from "@apollo/client";
import React from "react";
import {GET_QUOTES} from "../graphql/get-quotes";

const TaskCompletedMessage=()=>{
    const { data, loading, error } = useQuery(GET_QUOTES);
    const quotes = data?.quotes.slice(0, 3)
    if (loading) return <div>Loading...</div>;
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="font-semibold text-lg pb-3">
                You have completed all tasks.
            </h1>
            {quotes?.map((quote:any,index:number)=>(
                <div key={index}>
                <h1 className="font-semibold text-lg">
                    {quote.quote}
                </h1>
                <span>{quote.author}</span>
                </div>
                ))}

        </div>

    );
}
export default TaskCompletedMessage
