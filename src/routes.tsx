import React, {ReactNode} from "react";
import About from "./pages/About.tsx";
import Recommendation from "./pages/Recommendation.tsx";
import Search from "./pages/Search.tsx";
import {Navigate} from "react-router-dom";
import SearchResults from "./pages/SearchResults.tsx";
import Detail from "./pages/Detail.tsx";

export interface RouteInterface {
    element: ReactNode,
    path: string
}

export const routes: RouteInterface[]  = [
    {
        element: <About />,
        path: 'about'
    },
    {
        element: <Navigate to={'1'}/>,
        path: 'recommendation'
    },
    {
        element: <Recommendation />,
        path: 'recommendation/:page'
    },
    {
        element: <Navigate to={'/about'}/>,
        path: 'search'
    },
    {
        element: <Navigate to={'./1'}/>,
        path: 'search/:query'
    },
    {
        element: <SearchResults />,
        path: 'search/:query/:page'
    },
    {
        element: <Navigate to={'/about'}/>,
        path: '*'
    },
    {
        element: <Navigate to={'/about'}/>,
        path: 'details'
    },
    {
        element: <Navigate to={'/about'}/>,
        path: 'details/:type'
    },
    {
        element: <Detail />,
        path: 'details/:type/:id'
    }
]