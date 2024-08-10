import { Card, CardBody, Heading, Image } from '@chakra-ui/react'
import gameProps from '../interfaces/Games'
interface Props{
    game:gameProps
}
const GameCard = ({game}: Props) => {
  return (
    <Card borderRadius={10} margin={5} overflow='hidden'>
        <Image  src={game.background_image}/>
        <CardBody>
            <Heading fontSize='2xl'>{game.name}</Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard