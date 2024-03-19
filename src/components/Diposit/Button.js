import styled from "styled-components";

export const ButtonElement = styled.button`
   background-color: ${props => props.bg ? 'black' : 'white'};
   color: ${props => props.bg ? 'white' : 'black'};
   font-size: 20;
   font-weight: bold;
   padding-top: 20px;
   padding-bottom: 20px;
   border:none;
   border-radius:8px;
   &:hover{
    cursor:pointer;
   }

`