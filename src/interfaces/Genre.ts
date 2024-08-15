export default interface genre{
    id: number,
    name: string
}
export default interface FetchGenreReponse{
    count:number,
    results: genre[]
}