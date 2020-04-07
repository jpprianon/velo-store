import React from 'react';
import Jumbotron from '../components/jumbotron'
import CartSection from '../components/CartPage';


export default function CartPage() {
    return (
        <>
        <Jumbotron title="Votre panier" />
        
        <CartSection />
        </>
    )
}
