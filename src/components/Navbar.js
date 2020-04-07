import React from 'react'
import {FaBars, FaCartPlus} from 'react-icons/fa'
import styled from 'styled-components'
import {ProductConsumer} from '../context'
import logo from '../images/logo.svg'

export default function Navbar() {
    return (
        <ProductConsumer>
          {value => {
            const {cartItems, handleSidebar, handleCart } = value;
            return (
            <NavWrapper>
              <div className="nav-center">
                <FaBars className="nav-icon" onClick={handleSidebar} />
              <img src={logo} alt="bike store logo"/>
              <div className="nav-cart">
              <FaCartPlus className="nav-icon" onClick={handleCart} />
              
              <div className="cart-items">{cartItems}</div>
        </div>
        </div>

            </NavWrapper>
            );
          }}
        </ProductConsumer>
        );
    }

const NavWrapper = styled.ul`
@media (min-width:768px){
}
position:-webkit-sticky;
position:sticky;
top:0;
width:100%;
padding: 0.6rem 0rem 0.5rem 0rem;
background: #282728;
z-index:1;

.nav-center{
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1770px;
  margin: 0 auto;
}
.nav-icon {

  font-size:1.5rem;
  color:#86aa51;
  cursor: pointer;
}
.nav-cart{
  position: relative;
}

.cart-items{

  background:var(--primaryColor);
  color:var(--mainWhite);
  font-size: 0.85rem;
  position:absolute;
  top: -8px;
  right:-8px;
  padding:0 5px;
  border-radius:50%;
}

`;