import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
      <Content>
      <BgImage />
        <LogoWraper>
          <Logo src='images/cta-logo-one.svg' ></Logo>
           <SiginUp>Get All Here</SiginUp>
           <Description>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Non perferendis dolores accusantium tempora dicta consequatur! Cumque, minus totam exercitationem a consequuntur, nesciunt nihil ipsum nobis eos quasi, iste ut tempore?
           </Description>
          <LogoTwo src='images/cta-logo-two.png'/>
        </LogoWraper>
                
      </Content>
    </Container>
  )
}

const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
height: 100vh;
`;

const Content = styled.div`
margin-bottom: 10vw;
width: 100%;
position: relative;
min-height: 100vh;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 80px 40px;
height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  opacity:.45;
  background-repeat: no-repeat;
  background-image: url("/images/disney-plus-min.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index:1;  
  `;

const LogoWraper = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index:2;
`;

const Logo = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
  `;

const SiginUp = styled.a`
font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    background-color: #0483ee;
  }
 `;

const Description = styled.p`
color:rgb(198, 204, 204);
font-size: 14px;
margin: 0 0 24px;
line-height: 1.5;
letter-spacing: 2px; 
`;

const LogoTwo = styled.img`
  max-width:600px;
  margin-bottom:20px
  width:100%;
  
`;



export default Login