import React, { useEffect, useState } from 'react'
import ApiClient from '../services/Api-Client'
import gameProps from '../interfaces/Games'
import FetchGamesResponse from '../interfaces/Games'
import { Text } from '@chakra-ui/react'

function GameGrid() {
    const [games,setGames]=useState<gameProps[]>([])
    const [error,setError]=useState('');
    useEffect(()=>{
        ApiClient.get<FetchGamesResponse>('/games').then((respones)=>{
            setGames(respones.data.results)
        }).catch((error)=>setError(error.message))
    })
  return (
        <>
            {error && <Text>{error}</Text>}
            <ul>
                {games.map((game)=>(
                    <li key={game.id}>{game.name}</li>
                ))}
            </ul>
        </>

  )
}

export default GameGrid