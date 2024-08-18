import { Card, CardBody, Heading, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import gameProps from '../interfaces/Games'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../services/image-url'

interface Props{
    game:gameProps
}

const GameCard = ({game}: Props) => {
  return (
    <Card >
        <Image  src={getCroppedImageUrl(game.background_image)}/>
        <CardBody>
            <Heading fontSize='2xl'>{game.name}</Heading>  
            <HStack justifyContent="space-between">
              <PlatformIconList platforms={game.parent_platforms.map(p=>p.platform)}/>
              <CriticScore metaCritic={game.metacritic}/>
            </HStack>
        </CardBody>
    </Card>
  )
}

export default GameCard