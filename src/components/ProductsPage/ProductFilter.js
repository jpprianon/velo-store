import React from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../../context';

export default function ProductFilter () {
    return (
        <ProductConsumer>
            {value =>{
                const{
                    search, 
                    min,
                    max,
                    marque,
                    price,
                    shipping,
                    handleChange,
                    storeProducts
                } = value;

                let companies = new Set()
                companies.add('all');
                for(let product in storeProducts ){
                    companies.add(storeProducts[product]["marque"]);
                }
                companies = [...companies];
                return (
                    <div className="row my-5">
                        <div className="col-10 mx-auto">
            <FilterWrapper>
                {/* text search*/}
                <div>
                <label htmlFor="search">recherche produits</label>
                <input 
                type="text" 
                name="search" 
                id="search" 
                onChange={handleChange} 
                value={search} 
                className="filter-item"
                />
                </div>
                {/* end of text search*/}
                {/* category search*/}
<div>
    <label htmlFor="marque">marque</label>
    <select 
    name="marque" 
    id="marque" 
    onChange={handleChange}
    value={marque}
    className="filter-item">
        {/*<option value="all">all</option>
        <option value="bafang">bafang</option>
                <option value="samsung">samsung</option>*/}
    {
        companies.map((marque,index)=>{
            return (
            <option key={index} value={marque}>{marque}</option>
            );
        })}
    </select>
</div>
    {/* end of category search */}
    {/* price range*/}
    <div>
    <label htmlFor="price">
                <p className="mb-2">
                    prix du produit : <span>${price}</span>
                </p>
    </label>
    <input 
    type="range" 
    name="price" 
    id="price"
    min={min} 
    max={max}
    className="filter-price"
    value={price}
    onChange={handleChange}
     />
    </div>
    {/* end of price range*/}
    {/* free shipping*/}
        <div>
            <label htmlFor="shipping" 
            className="mx-2">
                Livraison gratiute
            </label>
            <input 
            type="checkbox" 
            name="shipping"
            id="shipping" 
            onChange={handleChange} 
            value={shipping && true}/>
        </div>

    {/* en of free shipping*/}
            </FilterWrapper>

                        </div>
                    </div>
                );
            }}
        </ProductConsumer>
    );
}

const FilterWrapper = styled.div`
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));
    grid-column-gap:2rem;
    grid-row-gap:1rem;
    label{
        font-weight:bold;
        text-decoration:capitalize;
    }
    .filter-item,.filter-price {
        display:block;
        width:100%;
        background:transparent;
        border-radius: 0.5rem;
        border: 2px solid var(--darkGrey);
    }

`;
