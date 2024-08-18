import useData from "./useData";
import gameProps from "../interfaces/Games";
import genre from "../interfaces/Genre";
const useGame = (selectedGenre:genre | null)=>{
    const {data,error} = useData<gameProps>("/games", {params : {genres: selectedGenre?.id}}, [selectedGenre?.id] );
    return {data,error};
}

export default useGame;