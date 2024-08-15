import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import useGenre from '../hooks/UseGenre';
const GenreList = () => {
const {data} = useGenre();
  return (
    <List>
        {data.map(genre=>(
            <ListItem key={genre.id} paddingY={2}>
              <HStack>
                <Image src={genre.image_background} boxSize='32px' borderRadius={3}/>
                <Text fontSize={'lg'}>{genre.name}</Text>
              </HStack>
            </ListItem>
        ))}
    </List>
  )
}

export default GenreList