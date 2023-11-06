import Loading from "./Loading.tsx";
import React, {FC} from "react";

export interface IError {
    name: string
    isError: boolean
}
interface ILoadingErrorHandler {
    error: IError
    loading: boolean
}

const LoadingErrorHandler: FC<ILoadingErrorHandler> = React.memo(({error, loading}) => {
    return (
        <>
            {loading ? <Loading/> : (error.isError && <div>{error.name}</div>) }
        </>
    );
})

export default LoadingErrorHandler;
