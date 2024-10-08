import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import Cards from "../components/Cards";
import HTMLReactParser from "html-react-parser/lib/index";
import Loading from "../components/Loading";


export default function Drinks()
{

    const [drinks, setDrinks] = useState([]);
    const [loading, setLoading] = useState(false);

    const getDrinks = async () => {
        try {
            setLoading(true)
            await axios.get('http://tradiway.test/api/drinks')
                .then((response)=>{
                    setDrinks(response.data.data.drinks)
                    setLoading(false)
                })
            
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        getDrinks()
    },[]);

    return (
        <>
        <Navbar/>
        <div className="container mx-auto">
            { loading ? <Loading/> : drinks.map((item, index)=>(
                <Cards title={item.name} description={HTMLReactParser(item.description)} img={`http://tradiway.test/storage/${item.image}`} link={`/drink/${item.slug}`} key={index} />
            ))}
        </div>
        </>
    )
}