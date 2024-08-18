import useData from "./useData";
import platForms from "../interfaces/PlateForm";
const usePlatForm = ()=>{
    const {data,error} = useData<platForms>('/platforms/lists/parents')
    return {data, error}
}
export default usePlatForm