import React from "react";
import styled from 'styled-components'
import {siginWithGoogle} from "../firebase";
import './trial.css'

function Header() {

    
    return(
        <div>
            <Nav>
                <Logo src="images/logo.svg" />
                <Navmenu>
                    <a href="/home" >
                        <img src="/images/home-icon.svg" alt="HOME"/>
                        <span>HOME</span>

                    </a>
                    <a href="/home" >
                        <img src="/images/search-icon.svg" alt="search"/>
                        <span>search</span>
                    </a>
                    <a href="/home" >
                        <img src="/images/original-icon.svg" alt="original"/>
                        <span>original</span>
                    </a>
                    <a href="/home" >
                        <img src="/images/series-icon (1).svg" alt="series"/>
                        <span>series</span>
                    </a>
                    <a href="/home" >
                        <img src="/images/watchlist-icon.svg" alt="watchlist"/>
                        <span>watchlist</span>
                    </a>
                    <a href="/home" >
                        <img src="/images/movie-icon.svg" alt="watchlist"/>
                        <span>watchlist</span>
                    </a>
                </Navmenu>
                <Login onClick={siginWithGoogle} >LOGIN</Login>
            </Nav>
        </div>
   
    );   
}

const Nav = styled.nav`
position: fixed;
top: 0;
left: 0;
right: 0;
height: 70px;
background-color:#090b13;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 36px;
letter-spacing: 14px;
z-index: 3;
`;

const Logo =  styled.img`
padding:0;
width:90px;
margin-top:4px;
font-Size:0;
display:inline-block;
width:100px;
`;

const Navmenu = styled.div`
align-items: center;
display: flex;
flex-flow: row nowrap;
height: 100%;
justify-content: flex-end;
margin: 0px;
padding: 0px;
position: relative;
margin-right: auto;
margin-left: 25px;
a {
  display: flex;
  align-items: center;
  padding: 0 12px;
  img {
    height: 30px;
    min-width: 20px;
    width: 20px;
    z-index: auto;
  }
  span {
    position: relative;
    text-decoration: none;
    font-family: 'Poppins',sans-serif;
    color: #ffff;
    bottom: -1px;
    white-space: nowrap;
    font-size: 15px;
    letter-spacing: 1.42px;
    line-height: 1.08;
    letter-spacing: 0.5px;
    padding: 2px 0px;
    &:after {
        content: "";
        position: absolute;
        border-radius: 0px 0px 4px 4px;
        background-color: rgb(264,264,264);
        height: 3px;
        width: 0;
        left: 0;
        bottom: -6px;
        transition: 0.3s;
    }
  }
  &:hover {
    color: #cccccc;
    span:after {
        width: 100%;
    }
  }
}
    @media (max-width: 768px){
        display:none
    }
    
`;

const Login = styled.a`
letter-spacing:.5px;
font-weight: bold;
border: ridge 1px;
border-radius:5px;
padding: 8px 16px;

:hover{
    color: rgb(7, 7, 7);
    background-color: rgb(255, 255, 255);
}


`;
export default Header;

