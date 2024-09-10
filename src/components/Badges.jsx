import { Link } from "react-router-dom";

export default function Badges({image, text, link})
{
    return (
        <>
            <Link to={`/${link}`} className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
                <img src={image} alt=""className="rounded w-8 h-6 me-2 -ms-1" />
                {text}
            </Link>
        </>
    )
}