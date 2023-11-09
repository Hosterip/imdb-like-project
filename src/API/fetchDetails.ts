import {options} from "./options.ts";
import {IDetails} from "../shared/interfaces/pageContentInterfaces.ts";

export const fetchData = async (type: string, id: string): Promise<IDetails | undefined>  => {
    if(!type || !id) {
        return
    }
    let data
    console.log(`https://api.themoviedb.org/3/${type}/${id}`)
    await fetch(`https://api.themoviedb.org/3/${type}/${id}`, options)
        .then(response => response.json())
        .then(response => data = response)
        .catch(e => console.error(e))
    return data
}