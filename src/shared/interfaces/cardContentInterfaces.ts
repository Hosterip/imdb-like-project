export interface IResults {
    adult: boolean,
    backdrop_path: string,
    id: number,
    vote_average: number
    name?: string
    title?: string
    original_language: string,
    original_name: string,
    overview: string,
    poster_path: string,
    media_type: string,
    genre_ids: number[],
    first_air_date?: string,
    release_date?: string,
}

export interface ICardContent {
    page?: number
    results: IResults[]
    total_results: number
    total_pages: number
}