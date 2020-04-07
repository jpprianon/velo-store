import React from 'react'
import styled from 'styled-components'
import mainBcg from '../images/mainBcg.jpeg';

export default function Hero({ img, title, max, children }) {
    return (
    <HeroWrapper max={max} img={img}>
        <div className="banner">
    <h1 className="title">{title}</h1>
        {children}
        </div>
        </HeroWrapper>
    );
}

const HeroWrapper = styled.div`
text-align:left;
display:flex;
align-items:center;
justify-content:center;
min-height:${props =>(props.max?"48vh" : "65vh")};
color:var(--mainWhite);
background:linear-gradient(var(--primaryRGBA),
var(--primaryRGBA)), 
url(${props => props.img}) center/cover no-repeat;

.title{
    padding-top:2rem;
    padding-left:30px;
    font-size:3.5rem;
    font-weight:bold;
    text-transform:uppercase;
    letter-spacing:var(--mainSpacing);
}
`;

Hero.defaultProps = {
    img: mainBcg
};