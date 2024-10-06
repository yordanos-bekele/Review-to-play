import platform from "../data/platform"

const usePlatForm = ()=>{
    const {data,error} = {data : platform, error : null}
    return {data, error}
}
export default usePlatForm