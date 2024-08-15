import useGame from '../hooks/UseGame'
import { SimpleGrid, Text } from '@chakra-ui/react'
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';

function GameGrid() {
    const {games,error} = useGame();
  return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{sm:1, md:2 , lg:3 , xl:4}} spacing={10}>
                {games.map((game)=>(
                    <GameCardContainer>
                        <GameCard  key={game.id} game={game}/>
                    </GameCardContainer>
                ))}
            </SimpleGrid>
        </>

  )
}

export default GameGrid