import React from "react";
import styled from "styled-components";

export default class Bigcards extends React.Component{
    render(){
        return(
            <Container>
                <Image source={{
                    uri:this.props.Image
                    }}/>
            </Container>
        )
    }
}

const Container=styled.View`
width: 375px;
height: 220px;
border-radius: 10px;
background: white;
overflow:hidden;
margin-left:5px;

`;

const Image=styled.Image`
width:100%;
height:100%;
`;
