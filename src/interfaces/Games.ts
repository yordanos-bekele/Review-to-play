export interface Platform{
    id:number,
    name:string,
    slug: string,
    
}
export default interface gameProps{
    id: number,
    name:string,
    background_image:string
    metacritic:number
    parent_platforms:{platform:Platform}[]
}
export default interface FetchGamesResponse{
    count:number;
    results:gameProps[]
}
export default interface gamePlateform{
    gamePlateForm:Platform
}

