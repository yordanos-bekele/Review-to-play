import { useEffect, useState } from "react";
import ApiClient from "../services/Api-Client";
import { AxiosRequestConfig, CanceledError } from "axios";
interface FetchResponse<T>{
    count: number;
    results: T[];
}
const useData = <T>(endpoint : string, requestConfig?:AxiosRequestConfig, deps?: any[])=>{
    const [data,setData]=useState<T[]>([])
    const [error,setError]=useState('');
    const [isLoading,SetIsLoading]=useState(true);
    useEffect(()=>{
        const controller = new AbortController
        ApiClient.get<FetchResponse<T>>(endpoint, {signal:controller.signal, ...requestConfig }).then((respones)=>{
            setData(respones.data.results);
            SetIsLoading(false);
        }).catch((error)=>{
            if (error instanceof CanceledError) return;
            setError(error.message);
            SetIsLoading(false);
        }
        );

        return ()=> controller.abort();
    },deps ? [...deps] : []) 

    return {data,isLoading,error};
}

export default useData;