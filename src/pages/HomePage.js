import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Featured from "../components/HomePage/Featured";


export default function HomePage() {
    return (
        <>
            <Hero title="Transformez votre vélo en électrique" max="true">
                <Link to="/products" className="main-link"
                    style={{ margin: "2rem" }}>
                        Nos produits
                    </Link>
            </Hero>
            <Featured />
        </>
    );
}
