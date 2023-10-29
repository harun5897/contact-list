import { createBrowserRouter,} from "react-router-dom"
import PageContactDetail from "@/pages/PageContactDetail"
import PageContact from "@/pages/PageContact"
import PageContactFavorite from "@/pages/PageContactFavorite"
import PageContactAdd from "@/pages/PageContactAdd"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <PageContact />
    },
    {
        path: "/favorite-contact",
        element: <PageContactFavorite />
    },
    {
        path: "/contact/:contactID",
        element: <PageContactDetail />
    },
    {
        path: "/add-contact",
        element: <PageContactAdd />
    },
])
