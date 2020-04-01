import React from 'react';

export default function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block my-5">
            <div className="row">
                { /* single column*/ }
            <div className="col-lg-2">
                <p className="text-uppercase">produits</p>
            </div>
            { /* end of single column*/ }
            { /* single column*/ }
            <div className="col-lg-2">
                <p className="text-uppercase">nom du produit</p>
            </div>
            { /* end of single column*/ }
            { /* single column*/ }
            <div className="col-lg-2">
                <p className="text-uppercase">prix</p>
            </div>
            { /* end of single column*/ }
            { /* single column*/ }
            <div className="col-lg-2">
                <p className="text-uppercase">quantité</p>
            </div>
            { /* end of single column*/ }
            { /* single column*/ }
            <div className="col-lg-2">
                <p className="text-uppercase">supprimer</p>
            </div>
            { /* end of single column*/ }
            { /* single column*/ }
            <div className="col-lg-2">
                <p className="text-uppercase">total</p>
            </div>
            { /* end of single column*/ }
            </div>
        </div>
    )
}
