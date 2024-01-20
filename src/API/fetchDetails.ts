import {options} from "./options.ts";
import {IDetails} from "../shared/interfaces/pageContentInterfaces.ts";
import {defaultAPIPath} from "../shared/constants/paths.ts";

export const fetchData = async (type: string, id: string): Promise<IDetails | undefined>  => {
    if(!type || !id) return

    let data
    console.log(`${defaultAPIPath}${type}/${id}`)
    await fetch(`${defaultAPIPath}/${type}/${id}`, options)
        .then(response => response.json())
        .then(response => data = response)
        .catch(e => console.error(e))
    return data
}