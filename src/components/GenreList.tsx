import { Button, HStack, Image, List, ListItem} from '@chakra-ui/react';
import useGenre from '../hooks/UseGenre';
import Loader from './Loader';
import genre from '../interfaces/Genre';
import getCroppedImageUrl from '../services/image-url';
interface Props{
  handleGenre: (Genre:genre)=> void
}
const GenreList = ({handleGenre}: Props) => {
const {data,isLoading} = useGenre();
  if (isLoading) return <Loader/>
  return (
    
    <List>
        {data.map(genre=>(
            <ListItem key={genre.id} paddingY={2}>
              <HStack>
                <Image src={getCroppedImageUrl(genre.image_background)} boxSize='32px' borderRadius={3}/>
                <Button fontSize={'lg'} variant={'link'} className='hover:translate-x-2' onClick={()=>handleGenre(genre)}>{genre.name}</Button>
              </HStack>
            </ListItem>
        ))}
    </List>
    
  )
}

export default GenreList


