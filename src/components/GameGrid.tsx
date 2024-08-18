import { SimpleGrid, Text } from '@chakra-ui/react'
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import useGame from '../hooks/UseGame';
import genre from '../interfaces/Genre';
interface Props{
    selectedGenre : genre | null
}
function GameGrid({selectedGenre}:Props) {
    const {data,error} = useGame(selectedGenre);
  return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{sm:1, md:2 , lg:3 , xl:4}} spacing={3}>
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