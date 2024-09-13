import axios from "axios";
import { useEffect, useState } from "react"
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import Cards from "../components/Cards";

export default function Plants()
{

    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState(false);


    //fungsi untuk mengambil data plants
    const getPlants = async () =>
    {
        setLoading(true);
        await axios.get('http://tradiway.test/api/plants')
            .then((response)=>{
                setPlants(response.data.data.plants);
            });
        setLoading(false)
    }

    useEffect(()=>{
        getPlants()
    },[]);

    return (
        <>
            <Navbar/>
            <div className="container py-5 px-5 mx-auto max-w-screen-xl bg-gray-100">
                <div className="grid gap-8 lg:grid-cols-4 sm:grid-cols-3" >
                    {loading ? <Loading/> : plants.map((item, index)=>(
                        <Cards key={index} title={item.name} img={`http://tradiway.test/storage/${item.image_url}`} description={`(${item.latin_name})`} link={`/plant/${item.slug}`} />
                    ))}
                </div>
            </div>
        </>
    )
}