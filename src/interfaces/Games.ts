export default interface gameProps{
    id: number,
    name:string
}
export default interface FetchGamesResponse{
    count:number;
    results:gameProps[]
}
