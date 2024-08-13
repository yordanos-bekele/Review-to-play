import { Card, CardBody, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import gameProps from '../interfaces/Games'
import PlatformIconList from './PlatformIconList'

interface Props{
    game:gameProps
}

const GameCard = ({game}: Props) => {
  return (
    <Card borderRadius={10} margin={5} overflow='hidden'>
        <Image  src={game.background_image}/>
        <CardBody>
            <Heading fontSize='2xl'>{game.name}</Heading>  
            <PlatformIconList platforms={game.parent_platforms.map(p=>p.platform)}/>
        </CardBody>
    </Card>
  )
}

export default GameCard