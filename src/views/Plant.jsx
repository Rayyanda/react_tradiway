import { useParams } from "react-router-dom";
import DetailView from "../components/DetailView";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import parser from "html-react-parser";
import Badges from "../components/Badges";

export default function Plant()
{

    const slug = useParams().slug;

    const [plant, setPlant] = useState({});
    const [description, setDescription] = useState("");
    const [drinks, setDrinks] = useState([]);

    const getPlant = async () => {
        await axios.get(`http://tradiway.test/api/plants/${slug}`)
            .then((response)=>{
                //console.log(response.data.data);
                setPlant(response.data.data.plant);
                setDescription(response.data.data.plant.description);
                setDrinks(response.data.data.plant.herbal_plant_through);
                
            });
    }

    useEffect(()=>{
        getPlant();
        
    },[]);

    return (
        <>
            <Navbar/>
            <div className="container mx-auto">
                <DetailView description={parser(description)} benefits={plant.benefits} image={`http://tradiway.test/storage/${plant.image_url}`} name={plant.name} latin_name={plant.latin_name}/>
                <div className="flex flex-row" >
                    <h3 className="text-gray-500 mr-2" >Digunakan untuk minuman : </h3>
                    {drinks.map((item, index)=>(
                        <Badges key={index} image={`http://tradiway.test/storage/${item.image}`} text={item.name} link={`drink/${item.slug}`} />
                    ))}
                </div>
            </div>
        </>
    )
}