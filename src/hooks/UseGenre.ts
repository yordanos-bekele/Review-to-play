import genre from "../interfaces/Genre"
import useData from "./useData"

const useGenre = ()=> {
    const {data,error } = useData<genre>("/genres");
    return {data,error};
}

export default useGenre