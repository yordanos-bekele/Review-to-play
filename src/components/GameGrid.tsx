import useGame from '../hooks/UseGame'
import { SimpleGrid, Text } from '@chakra-ui/react'
import GameCard from './GameCard';

function GameGrid() {
    const {games,error} = useGame();
  return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{sm:1, md:2 , lg:3 , xl:4}} spacing={10}>
                {games.map((game)=>(
                    <GameCard  key={game.id} game={game}/>
                ))}
            </SimpleGrid>
        </>

  )
}

export default GameGrid