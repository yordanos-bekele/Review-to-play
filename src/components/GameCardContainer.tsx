import { Box } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
interface props{
    children: ReactNode;
}
function GameCardContainer({children}: props) {
  return (
   <Box borderRadius={10} width={'300px'} overflow='hidden'>
    {children}
   </Box>
  )
}

export default GameCardContainer