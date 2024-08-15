import useData from "./useData";
import gameProps from "../interfaces/Games";
const useGame = ()=>{
    const {data,error} = useData<gameProps>("/games");
    return {data,error};
}

export default useGame;