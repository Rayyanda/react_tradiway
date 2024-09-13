import { Routes, Route } from "react-router-dom";
import Homepage from "../views/Homepage";
import Drinks from "../views/Drinks";
import Plant from "../views/Plant";
import Login from "../views/Login";
import Drink from "../views/Drink";
import Registration from "../views/Registration";
import Plants from "../views/Plants";

export default function RoutesIndex()
{
    return (
        <Routes>

            {/* Login */}
            <Route path="/login" element={<Login/>} />

            {/* Registration */}
            <Route path="/register" element={<Registration />} />

            {/* root */}
            <Route path="/" element={<Homepage />} />

            {/* drinks */}
            <Route path="/drinks" element={<Drinks />} />

            <Route path="/drink/:slug" element={<Drink/>} />

            {/* detail view */}
            <Route path="/plants" element={<Plants/>} />

            <Route path="/plant/:slug" element={<Plant />} />

        </Routes>
    );
}