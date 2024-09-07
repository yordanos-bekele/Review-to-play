import useData from "./useData";
import gameProps from "../interfaces/Games";
import genre from "../interfaces/Genre";
import platForms from "../interfaces/PlateForm";
import { GameQuery } from "../App";
const useGame = (gameQuery:GameQuery)=>{
    const {data,error} = useData<gameProps>("/games", {params : {genres: gameQuery.genre?.id, parent_platforms: gameQuery.platform?.id, ordering:gameQuery?.ordering, search:gameQuery?.search}}, [gameQuery.genre?.id, gameQuery.platform?.id, gameQuery.ordering, gameQuery.search] );
    return {data,error};
}

export default useGame;