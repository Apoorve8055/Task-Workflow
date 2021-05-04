import styled from 'styled-components';
export const Container = styled.section`
    display:flex;
    flex-direction: row;
 
    @media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    display:flex;
    flex-direction:column;
}`;

