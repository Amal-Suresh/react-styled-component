import styled from "styled-components";

export const MainDiv = styled.div`
    padding:10px;
    padding-top:0px;
    width: 450px;
    height:550px;
    background-color: white;
    border-radius:10px;
`
export const ParentDiv = styled.div`
    height:600px;
    padding:20px;
    display:flex;
    justify-content: center;
    background-color: gray;
`



export const JustifyBetweenDiv = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-top: 20px;
`

export const CloseDiv = styled.div`
  background-color:#f7fafd;
  padding: 5px;
  border-radius: 20%;
  &:hover {
    cursor: pointer;
  }
`

export const BlueDiv = styled.div`
  gap:10px;
  display: flex;
  align-items: center;  
  background-color:#ecf2f9;
  padding: 5px;
  border-radius: 5px;
  padding: 0px 14px;
  &:hover {
    cursor: pointer;
  }
`

export const FlexColDiv = styled.div`
margin-top: ${props=>props.mt?props.mt:''};
  display: flex;
  flex-direction: column;
`


export const Img = styled.img`
 width:${(props) => props.width} ;
 height:${(props) => props.width};
 border-radius:${(props) => props.rounded ? '50%' : ''};
 margin-top:${(props) => props.mt ? props.mt : ''};

`

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.gap ? props.gap : ''};
  
 
`
export const BorderDiv = styled.div`
  display: flex;
  border: 1px solid rgba(128, 128, 128, 0.5);
  border-radius:5px;
  width:95%;
  padding: 0 10px 0px;
  margin-top: 20px;
 
`


export const LeftBorderDiv = styled.div`
  display: flex;
  border-left: 1px solid rgba(128, 128, 128, 0.5);
  margin-left: 10px;
  height:60px;
  width:100%;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;

 
`

export const FlexEnd = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width:100%;

  margin-top: 15px;
  gap: ${(props) => props.gap ? props.gap : ''};
  
 
`
export const GrayDiv = styled.div`
  padding:5px; 
  background-color:#ecf2f9;
  border-radius: 5px;
`

export const FullDiv = styled.div`
  padding:10px; 
  width: 95%;
  background-color:#ecf2f9;
  border-radius: 5px;
  margin-top: 10px;
  display:flex;
  gap:5px;
  align-items: center;
  margin-top: 30px;
`


    ;
