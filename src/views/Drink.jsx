import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import DetailView from "../components/DetailView";
import parser from "html-react-parser";
import Badges from "../components/Badges";

export default function Drink()
{

    const slug = useParams().slug;

    const [drink, setDrink] = useState({});
    const [loading, setLoading] = useState(false);
    const [composition, setComposition] = useState([]);
    const [description, setDescription] = useState("");

    const getDrink = async () =>
    {
        await axios.get(`http://tradiway.test/api/drinks/${slug}`)
            .then((response)=>{
                setDrink(response.data.data.drink);
                setDescription(response.data.data.drink.description);
                setComposition(response.data.data.drink.composition);
                
            })
        setLoading(false);
    }

    useEffect(()=>{
        getDrink();
    });


    return (
        <>
            <Navbar/>
            <div className="container mx-auto">
                <DetailView image={`http://tradiway.test/storage/${drink.image}`} description={parser(description)} benefits={drink.benefits} latin_name={drink.category} name={drink.name} />
                <div className="flex flex-row">
                    <h3 className="text-gray-500 mr-2" >Komposisi : </h3>
                    {composition.map((item, index)=>(
                        <Badges image={`http://tradiway.test/storage/${item.image_url}`} key={index} text={item.name} link={`plant/${item.slug}`} />
                    ))}
                </div>
            </div>
        </>
    )
}