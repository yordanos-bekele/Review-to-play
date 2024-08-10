import { useEffect, useState } from "react";
import ApiClient from "../services/Api-Client";
import gameProps from "../interfaces/Games";
import FetchGamesResponse from "../interfaces/Games";
import { CanceledError } from "axios";

const useGame = ()=>{
    const [games,setGames]=useState<gameProps[]>([])
    const [error,setError]=useState('');
    useEffect(()=>{
        const controller = new AbortController
        ApiClient.get<FetchGamesResponse>('/games', {signal:controller.signal }).then((respones)=>{
            setGames(respones.data.results)
        }).catch((error)=>{
            if (error instanceof CanceledError) return;
            setError(error.message)}
        );

        return ()=> controller.abort();
    },[]) 

    return {games,error};
}

export default useGame;