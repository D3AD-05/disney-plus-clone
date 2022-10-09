import React from "react";
import styled from 'styled-components'
import { siginWithGoogle } from "../firebase";
import './trial.css'

function Header() {
    const [first, last] = localStorage.getItem("name").split(' ')
    const OnDp = () => {
        console.log("hello");
    }
    return (
        <div>
            <Nav>
                <Logo src="images/logo.svg" />


                {!"name" ? <Login onClick={siginWithGoogle} >LOGIN:</Login> : <>

                    <Navmenu>
                        <a href="/home" >
                            <img src="/images/home-icon.svg" alt="HOME" />
                            <span>HOME</span>

                        </a>
                        <a href="/home" >
                            <img src="/images/search-icon.svg" alt="search" />
                            <span>search</span>
                        </a>
                        <a href="/home" >
                            <img src="/images/original-icon.svg" alt="original" />
                            <span>original</span>
                        </a>
                        <a href="/home" >
                            <img src="/images/series-icon (1).svg" alt="series" />
                            <span>series</span>
                        </a>
                        <a href="/home" >
                            <img src="/images/watchlist-icon.svg" alt="watchlist" />
                            <span>watchlist</span>
                        </a>
                        <a href="/home" >
                            <img src="/images/movie-icon.svg" alt="watchlist" />
                            <span>watchlist</span>
                           
                            {/* <img className="dp" src={localStorage.getItem("dp")}></img> */}
                            
                        </a>

                    </Navmenu>

                    <SignOut>
                    {/* <Login onClick={siginWithGoogle} >LOGIN:</Login> */}

                        <User onClick={OnDp}>{first[0] + last[0]}</User>
                        <DropDown>
                            
                                    logOut
                              
                        </DropDown>
                    </SignOut>



                </>}



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

const Logo = styled.img`
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
cursor: pointer;

:hover{
    color: rgb(7, 7, 7);
    background-color: rgb(255, 255, 255);
}
`;

const User = styled.span`
    letter-spacing:.5px;
    background-color: rgb(9, 111, 170);
    height: 30px;
    width: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;  
    
    
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  User {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

export default Header;

