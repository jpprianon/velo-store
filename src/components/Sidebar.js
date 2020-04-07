import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../context'


export default function Sidebar() {
    return (
    <ProductConsumer>
        {value => {
        const { links, sidebarOpen, handleSidebar } = value;
            return ( 

            <SideWrapper show={sidebarOpen}>
                <ul className="test" >
                    {links.map(link => {
                        return (
                            <li className="test2" key={link.id}>
                            <Link to={link.path} 
                            className="sidebar-link" onClick={handleSidebar}> 
                            {link.text}
                            </Link>
                            </li>
                        );
                    })}
                </ul>
            </SideWrapper>
            );
        }}
    </ProductConsumer>
    );
}

const SideWrapper = styled.div`
@media (min-width:768px){
    display:flex;
    align-items:center;
    justify-content: space-between;
    max-width: 1770px;
    height:auto;
    margin:0 auto;
}

.test{
    display: flex;
    align-items: center;
    height:auto;
    margin:0 auto;
}

.test2{
    padding:0rem 1rem 0.6rem 0rem;
}

  
    

    transition: var(--mainTransition);
    li {
        list-style-type:none;
    }
    .sidebar-link {
    text-decoration:none;
    font-size: 1.3rem;
    text-transform: capitalize;
    color: var(--mainBlack);
    padding: 1rem 2rem 0.5rem 1rem;
    transition:var(--mainTransition);
    cursor: pointer;
    transform: ${props => (props.show ? "translateX(0)" : "translateX(-100%)")};

}

.sidebar-link:hover{
    background: #86aa51;
    padding: 1rem 0.5rem 0.3rem 0.5rem;
    color: var(--mainWhite);
}

height:${props => (props.show ? '45px' : '0px' )};
overflow:hidden;
@media (min-width:768px){
    height:auto;
    margin:0 auto;
    
}  


`;