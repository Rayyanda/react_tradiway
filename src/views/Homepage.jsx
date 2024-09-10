import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import axios from "axios";
import Loading from "../components/Loading";
export default function Homepage()
{

    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState(false);

    //fungsi untuk mengambil data dari API
    const getPlants = async () => {
        try {
            setLoading(true);
            // axios.defaults.headers.common['Accept'] = "application/json";
            // axios.defaults.headers.commonp['content-type'] ="application/json";
            await axios.get("http://tradiway.test/api/plant")
                .then(response => {
                   
                    setPlants(response.data.data.plants);
                    
                })
        } catch (error) {
            
        }
        setLoading(false);
    }

    useEffect(()=>{
        getPlants();
    },[]);

    return (
        <>
        <Navbar/>
        <div className="container mx-auto">
            <section className="bg-white dark:bg-gray-900">
                <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-4 lg:px-6">
                    <div className="mx-auto max-w-screen-md sm:text-center">
                        <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">Hidup Sehat</h2>
                        <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
                        <form action="#">
                            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                                <div className="relative w-full">
                                    <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap={"round"} strokeLinejoin={"round"} d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                        </svg>
                                    </div>
                                    <input className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Temukan obat herbal terbaikmu" type="email" id="email" required=""/>
                                </div>
                                <div>
                                    <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Search</button>
                                </div>
                            </div>
                            <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">We care about the protection of your data. <a href="#" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Read our Privacy Policy</a>.</div>
                        </form>
                    </div>
                </div>
            </section>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-3">
                        {loading ? <Loading/> : plants.map((plant, index)=>(
                            <Cards key={index} link={`/plant/${plant.slug}`} title={plant.name} img={`http://tradiway.test/storage/${plant.image_url}`} description={plant.description}/>
                        ))}

                        {/* <Cards title={"Jahe Lemon"} img={"https://placehold.co/600x400"} description={"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."}/>
                        <Cards title={"Wedang Jahe"} img={"https://placehold.co/600x400"} description={"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."} />
                        <Cards title={"Jahe Parut"} img={"https://placehold.co/600x400"} description={"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."} />
                        <Cards title={"Ginseng"} img={"http://localhost:8000/storage/images/plants/roots-ginseng-market-Asian-Korean.webp"} description={"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."} /> */}
                    </div>  
                </div>
            </section>
        </div>
        </>
    );
}