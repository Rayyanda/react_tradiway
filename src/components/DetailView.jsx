import { useParams } from "react-router-dom"
import Star from "./Star"
import parser from "html-react-parser"

export default function DetailView({image, name, description, latin_name, benefits})
{

    return (
        <>
            <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
                <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                    <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                    <img className="w-full dark:hidden" src={image} alt="" />
                    <img className="w-full hidden dark:block" src={image} alt="" />
                    </div>

                    <div className="mt-6 sm:mt-8 lg:mt-0">
                    <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                        {name}
                    </h1>
                    <p className="text-sm text-gray-500 sm:text-1xl dark:text-white">{latin_name}</p>
                    <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                        <p
                        className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white"
                        >
                        $1,249.99
                        </p>

                        <div className="flex items-center gap-2 mt-2 sm:mt-0">
                        <div className="flex items-center gap-1">

                            {/* sesuaikan rating, bisa di loop*/}
                            <Star/>
                            
                        </div>
                        <p
                            className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400"
                        >
                            (5.0)
                        </p>
                        <a
                            href="#"
                            className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
                        >
                            345 Reviews
                        </a>
                        </div>
                    </div>

                    <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                        <a
                        href="#"
                        title=""
                        className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        role="button"
                        >
                        <svg
                            className="w-5 h-5 -ms-2 me-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                            />
                        </svg>
                        Add to favorites
                        </a>

                        {/* <a
                        href="#"
                        title=""
                        className="text-white mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center"
                        role="button"
                        >
                        <svg
                            className="w-5 h-5 -ms-2 me-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                            />
                        </svg>

                        Add to cart
                        </a> */}
                    </div>

                    <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

                    
                    <p className="mb-6 text-gray-500 dark:text-gray-400">
                    </p>
                    <div className="mb-6 text-gray-500 dark:text-gray-400">
                        {description}
                    </div>
                    
                    {/* <div className="text-gray-500 flex flex-row">
                        <p className="font-bold mb-0">Manfaat : </p>
                    </div> */}
                    <p className="text-gray-500 dark:text-gray-400">
                        <span  className="font-bold" >Manfaat : </span>
                        {benefits}
                    </p>
                    </div>
                </div>
                </div>
            </section>
            <section>
                
            </section>
        </>
    )
}