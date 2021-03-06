import React from 'react'
import {ProductConsumer} from '../../context'
import Title from '../Title';
import Product from '../Product';
import ProductFilter from "./ProductFilter";

export default function Products() {
    return (
        <ProductConsumer>
            {value => {
                const {filteredProducts} = value;
                return (
                <section className="py-5">
                    <div className="container">
                        {/* title */}
                <Title center title="Nos produits" />
                {/* product filter */}
                <ProductFilter />
                {/* products */}
                {/* total count */}
                    <div className="row">
                    <div className="col-10 mx-auto">
                    <h6 className="text-title">
                        total produits : {filteredProducts.length}
                    </h6>
                    </div>
                    </div>
                    {/* products */}
                    <div className="row py-5">
                        {filteredProducts.length === 0?(
                            <div className="col text-title text-center">
                            Désolé, il n'y à pas de produit qui corespond a votre recherche
                            </div>
                        ):
                        
                        (
                        filteredProducts.map(product => {
                            return <Product key={product.id} product= {product} />;
                            
                        }))}
                    </div>
                    </div>
                </section>
                );
            }}
        </ProductConsumer>
    );
}
