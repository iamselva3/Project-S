import React, { useTransition } from "react";
import styled from 'styled-components';
import {LinearGradient} from"expo-linear-gradient";
import{Animated, TouchableOpacity} from "react-native";
import{ Ionicons } from "@expo/vector-icons";

export default class Menu extends React.Component{
    state={
        top:new Animated.Value(900)
    };
e
    componentDidMount(){
        Animated.spring(this.state.top,{toValue:0}).start();
    }
    closemenu=()=> {
        Animated.spring(this.state.top,{toValue:900}).start();
    }
    render(){
        return(
           <AnimatedContainer style={{position:"absolute",top:this.state.top,zIndex:100}}>
             <Cover>
                <LinearGradient
                colors={["rgba(255,148,115,1)","rgba(255,123,123,1)"]}
                style={{
                    width:"100%",
                    height:"100%",
                    zIndex:100,
                }}
                />
             </Cover>
             <TouchableOpacity style={{
                position:"absolute",
                top:140 ,
                left:"50%",
                marginLeft:-22
             }}
             onPress={this.closemenu}
             >
             <Closeview>
                <Ionicons name="ios-close" size={35} color="blue"/>
             </Closeview>
             </TouchableOpacity>

            <Content/>
           </AnimatedContainer>
        )
    }
}

const Container= styled.View`
width: 100%;
height: 100%;
background-color: #f3f0f5;
  
`;

const AnimatedContainer=Animated.createAnimatedComponent(Container)
const Cover = styled.View`
width: 100%;
height: 142px;
`;

const Content = styled.View`
`;

const Closeview = styled.View`
width: 44px;
height: 44px;
border-radius: 30px;
background-color: "white";
justify-content: center;
align-items : center;
`;