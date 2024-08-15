export default interface genre{
    id: number,
    name: string,
    image_background: string
}
export default interface FetchGenreReponse{
    count:number,
    results: genre[]
}