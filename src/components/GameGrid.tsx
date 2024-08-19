import { SimpleGrid, Text } from '@chakra-ui/react'
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import useGame from '../hooks/UseGame';
import genre from '../interfaces/Genre';
import platForms from '../interfaces/PlateForm';
interface Props{
    selectedGenre : genre | null,
    selectedPlatform: platForms | null
}
function GameGrid({selectedGenre, selectedPlatform}:Props) {
    const {data,error} = useGame(selectedGenre, selectedPlatform);
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