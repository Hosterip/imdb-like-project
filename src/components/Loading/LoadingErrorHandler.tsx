import React, {FC} from "react";
import {Loading} from "./Loading.tsx";

export interface IError {
    name: string
    isError: boolean
}
interface ILoadingErrorHandler {
    error: IError
    loading: boolean
}

export const LoadingErrorHandler: FC<ILoadingErrorHandler> = React.memo(({error, loading}) => {
    return (
        <>
            {loading ? <Loading/> : (error.isError && <div>{error.name}</div>) }
        </>
    );
})

