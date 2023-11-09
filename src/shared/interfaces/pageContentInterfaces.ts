interface IGenres {
    id: number,
    name: string
}

export interface IDetails {
    budget: number,
    genres: IGenres[]
    homepage: string,
    id: number,
    overview: string,
    vote_average: number
    popularity: number,
    poster_path: string
    release_date?: string,
    first_air_date?: string,
    revenue: number,
    status: string
    title?: string,
    name?: string,
}
