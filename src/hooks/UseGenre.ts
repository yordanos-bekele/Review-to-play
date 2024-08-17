import genre from "../interfaces/Genre"
import useData from "./useData"

const useGenre = ()=> {
    const {data,error,isLoading} = useData<genre>("/genres");
    return {data,error, isLoading};
}

export default useGenre