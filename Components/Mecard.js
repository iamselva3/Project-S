import React from "react";
import styled from "styled-components";
import {LinearGradient} from"expo-linear-gradient";
import{ Ionicons } from "@expo/vector-icons"

export default class Mecard extends React.Component{
    render(){
        return(
            <Container>
                <Image source={{uri:this.props.Image}} />
            <LinearGradient
            colors={["rgba(0,0,0,0)","rgba(0,0,0,0.8)"]}
            style={{
                position:"absolute",
                width:"100%",
                height:"100%",
            }}
            />
            <Textcontainer>
            <Ionicons name="ios-play" color="white" size={18}/>
            <Text>S3 EP01</Text>
            </Textcontainer>
            </Container>
         
        )
    }
}

const Container=styled.View`
width:197px;
height:110px;
border-radius:4px;
background-color:white;
overflow:hidden;
margin-left:10px;
` ;

const Image=styled.Image`
width:100%;
height:100%;
z-index:-5;
`;

const Text=styled.Text`
position:absolute;
font-size:18px;
font-weight:500;
color:white;
padding-left:20px;
`;

const Textcontainer=styled.View`
position:absolute;
top:80px;
left:10px;
flex-direction:row;
align-items:center;


`;