export default interface gameProps{
    id: number,
    name:string,
    background_image:string
}
export default interface FetchGamesResponse{
    count:number;
    results:gameProps[]
}

