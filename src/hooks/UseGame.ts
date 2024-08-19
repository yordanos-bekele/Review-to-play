import useData from "./useData";
import gameProps from "../interfaces/Games";
import genre from "../interfaces/Genre";
import platForms from "../interfaces/PlateForm";
const useGame = (selectedGenre:genre | null, selectedPlatforms:platForms | null)=>{
    const {data,error} = useData<gameProps>("/games", {params : {genres: selectedGenre?.id, parent_platforms: selectedPlatforms?.id}}, [selectedGenre?.id, selectedPlatforms?.id] );
    return {data,error};
}

export default useGame;