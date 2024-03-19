import styled from "styled-components";

export const TitleElement = styled.p`
   font-size: 20;
   font-weight: bold;
`
export const LabelText = styled.p`
   font-size: 15;
   font-weight: bold;
   color:gray;
`
export const NormalText = styled.p`
   font-size: 10;
   color:gray;
   
`
export const Text = styled.p`
   margin:0;
   font-size:${(props => props.size)};
   color:${(props => props.black ? 'black' : 'gray')};
   font-weight: ${(props => props.bold ? 'bold' : '')};

   
`