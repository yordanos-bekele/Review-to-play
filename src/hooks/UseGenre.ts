import React, { useEffect, useState } from 'react'
import ApiClient from '../services/Api-Client';
import { CanceledError } from 'axios';
import FetchGenreResponse from '../interfaces/Genre';
import genre from '../interfaces/Genre';

const useGenre = ()=> {
    const [genres,setGenres]=useState<genre[]>([])
    const [error,setError]=useState('');
    useEffect(()=>{
        const controller = new AbortController
        ApiClient.get<FetchGenreResponse>('/genres', {signal:controller.signal }).then((respones)=>{
            setGenres(respones.data.results)
        }).catch((error)=>{
            if (error instanceof CanceledError) return;
            setError(error.message)}
        );

        return ()=> controller.abort();
    },[]) 

    return {genres,error}; 
}

export default useGenre