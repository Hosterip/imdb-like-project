import { ICardContent } from "../shared/interfaces/cardContentInterfaces.ts";
import {options} from "./options.ts";
import {defaultAPIPath} from "../shared/constants/paths.ts";

export const fetchContent = async (
    which: 'trending' | 'search',
    type: string,
    page: string | undefined,
    query?:string,
): Promise<ICardContent | undefined> => {
    if(!type || !page) {
        return
    }
    let data
    const link =
        which === "trending"
        ? `/week?page=${page}`
        : `?query=${query}&page=${page}`
    await fetch(`${defaultAPIPath}/${which}/${type}${link}`, options)
        .then(response => response.json())
        .then((response: ICardContent) => data = response)
        .catch(e => {
            console.error('Error:', e)
        })
    return data
}