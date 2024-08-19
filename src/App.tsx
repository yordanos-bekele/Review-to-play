import { Grid, GridItem, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react';
import genre from './interfaces/Genre';
import platForms from './interfaces/PlateForm';
import PlatFormSeletector from './components/PlatFormSeletector';

function App() {
  const [selectedGenre, setSelectedGenre] = useState<genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<platForms | null>(null);

  return (
     <Grid 
     templateAreas={{
      base:`"nav" "main"`,
      lg:`"nav nav" "aside main"`
     }}
     templateColumns={{
      base: '1fr',
      lg:`'200px' '1fr'`
     }}
     
     >
      <GridItem area='nav'>
        <Navbar/>
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside'  paddingX={6}>
          <GenreList handleGenre={(Genre)=> setSelectedGenre(Genre)} selectedGenre={selectedGenre}/>
        </GridItem>
      </Show>
      <GridItem area='main'>
        <PlatFormSeletector handlePlatform={(platForms)=> setSelectedPlatform(platForms)}/>
        <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform}/>
      </GridItem>
     </Grid>
  
  )
}

export default App
