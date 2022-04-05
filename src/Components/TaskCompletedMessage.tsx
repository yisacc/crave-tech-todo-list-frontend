import {useQuery} from "@apollo/client";
import {GET_EXCHANGE_RATES} from "../graphql/get-exchange-rates";
import React from "react";

const TaskCompletedMessage=()=>{
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
export default TaskCompletedMessage
