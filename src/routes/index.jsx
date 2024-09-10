import { Routes, Route } from "react-router-dom";
import Homepage from "../views/Homepage";
import Drinks from "../views/Drinks";
import DetailView from "../components/DetailView";
import Plant from "../views/Plant";
import Login from "../views/Login";
import Drink from "../views/Drink";

export default function RoutesIndex()
{
    return (
        <Routes>

            {/* Login */}
            <Route path="/login" element={<Login/>} />

            {/* root */}
            <Route path="/" element={<Homepage />} />

            {/* drinks */}
            <Route path="/drinks" element={<Drinks />} />

            <Route path="/drink/:slug" element={<Drink/>} />

            {/* detail view */}
            <Route path="/plant/:slug" element={<Plant />} />

        </Routes>
    );
}