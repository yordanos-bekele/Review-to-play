import { SimpleGrid, Text } from '@chakra-ui/react'
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import useGame from '../hooks/UseGame';

function GameGrid() {
    const {data,error} = useGame();
  return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{sm:1, md:2 , lg:3 , xl:4}} spacing={10}>
                {data.map((game)=>(
                    <GameCardContainer>
                        <GameCard  key={game.id} game={game}/>
                    </GameCardContainer>
                ))}
            </SimpleGrid>
        </>

  )
}

export default GameGrid