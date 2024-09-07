import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import genre from "./interfaces/Genre";
import platForms from "./interfaces/PlateForm";
import PlatFormSeletector from "./components/PlatFormSeletector";
import SortSelector from "./components/SortSelector";
import SearchTab from "./components/searchTab";

export interface GameQuery {
  genre: genre | null;
  platform: platForms | null;
  ordering: string | null;
  search: String | null;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: `'200px' '1fr'`,
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={6}>
          <GenreList
            handleGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <SearchTab
          handleSearching={(search) => setGameQuery({ ...gameQuery, search })}
        />
        <HStack marginEnd={5}>
          <PlatFormSeletector
            handlePlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector
            handleOrder={(ordering) => setGameQuery({ ...gameQuery, ordering })}
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
