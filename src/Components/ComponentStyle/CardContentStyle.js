import styled from "styled-components";

export const Content = styled.div`

    background-color:#00000029;
    
    
    height:100%;
    padding:10px;
    margin:10px;

    border-radius:10px 10px 10px 10px;

    box-shadow: 0.5px 0.5px #00000070;

`;

export const CardText = styled.div`

    background-color:#0000005c;
    height:40px;
    min-width:21.5vw;
    
    color:#ffffffeb;
   
    border:1px outset black;

    

    font-size:20px;
    font-weight:bold;

    padding:9px;

`;

export const CardBody = styled.div`

background-color:white;

margin-top:10px;
padding:10px;
border:1px outset black;

border-radius:0px 10px 0px 10px;



`;
export const CardSubject = styled.h2`
margin:0px;
`;
export const CardDescription = styled.p`
font-family: 'Roboto', sans-serif;
font-size: 20px;
font-weight:bold;
width:20vw;
`;
export const CardButtons = styled.div`
display:flex;
justify-content:space-between
`;

