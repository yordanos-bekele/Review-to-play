import useData from "./useData"
import genre from "../data/genre";

const useGenre = ()=> {
    const {data,error,isLoading} = {data : genre, error: null, isLoading: false};
    return {data,error, isLoading};
}

export default useGenre