import {options} from "./options.ts";
import {IContent} from "../pages/Recommendation.tsx";

export const fetchContent = async (
    which: 'trending' | 'search',
    type: string,
    page: string | undefined,
    query?:string,
): Promise<IContent | undefined> => {
    if(!type || !page) {
        return
    }
    let data
    const link =
        which === "trending"
        ? `/week?page=${page}`
        : `?query=${query}&page=${page}`
    await fetch(`https://api.themoviedb.org/3/${which}/${type}${link}`, options)
        .then(response => response.json())
        .then((response: IContent) => data = response)
        .catch(e => {
            console.error('Error:', e)
        })
    return data
}