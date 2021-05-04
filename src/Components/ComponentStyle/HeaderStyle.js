import styled from 'styled-components';

export const customStyles = {
    
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };


export const NAV = styled.nav`
background-color:#00000070;
display:flx;

justify-content:space-between;
align-items:center;

padding-left:20px;
padding-right:20px;

`;

export const LOGO = styled.div`

padding:10px;
color:white;
font-size:20px;
font-weight:bold;
`;

export const AddItemsButton = styled.div`

padding:10px;
color:white;
font-size:20px;
font-weight:bold;

`;

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    padding:20px;
    margin-top:10px;
    align-items:center;
    justify-content: center;
    
`;

export const Content = styled.div`
display:flex;
flex-direction:row;
justify-content: space-between;
padding:3px;
width:100%;
font-weight:bold;
`;

export const  Button = styled.button`
width:100%;
margin:2px;
height:30px;
`;

export const HeadLine = styled.span`
font-size:2em;
font-weight:bold;
padding-bottom:20px;
`;
