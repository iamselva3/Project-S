
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { render } from 'react-native-web';
import styled from 'styled-components';
import { ScrollView,StatusBar } from 'react-native';
import Bigcards from './Components/Bigcards';
import Mecard from './Components/Mecard';
import{ Ionicons } from "@expo/vector-icons";
import{TouchableOpacity} from 'react-native'
import Menu from './Components/Menu';
import{Animated} from "react-native";

export default class App extends React.Component{
 state={
  left:10
 }
  render(){
  return(
<Main>
  <Menu />

<ScrollView showsVerticalScrollIndicator={false}>
   <StatusBar hidden/>
    <Header>
      <TouchableOpacity onPress={()=>{console.log("Menu icon")
    this.setState({left:300})
    }}
      style={{
        position:"absolute",
        top:18,
        left:this.state.left,
        zIndex:100

      }}
      >
      <Ionicons name='ios-menu' size={25} color="gray"
      />
      </TouchableOpacity>
      <Logo>
      </Logo>
      <Profile>

      </Profile>
    </Header>
    <Bigcardcontainer>
      <ScrollView horizontal={true}
      showsHorizontalScrollIndicator={false}>
        {Bigcarddata.map((data,index)=>(
          <Bigcards key={index} Image={data.Image}/>

        ))
        }
      </ScrollView>
    </Bigcardcontainer>
    <ContinueText>
      Continue Watching
    </ContinueText>
   <MecardContainer>
  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
   {
    Mecarddata.map((data,index)=>(
      <Mecard key={index} Image={data.Image}/>
    ))
   }
   </ScrollView>
   </MecardContainer>
  </ScrollView>
</Main>

  );
}
}
const Main=styled.View`
flex:1;
background-color: #000000;
`;

const Sometext=styled.Text`
`;
const Header=styled.View`
width: 100%;
height:56px;
background: white;
`;
 
const Logo=styled.View`
margin-top: 22px;
margin-left: 40px;
width:90px;
height:20px;
background: lightgray;
border-radius:30px;
`;

const Profile=styled.Image`
position: absolute;
top: 15px;
right: 10px;
width: 45px;
height: 34px;
background:#C5B0B0;
border-radius:22px;
`;

const Bigcardcontainer=styled.View`
margin-top: 20px;
`;

const ContinueText=styled.Text`
margin-top:20px;
margin-left:10px;
color: white;
font-size:15px;
font-weight:600;
text-transform:uppercase;
`;

const MecardContainer=styled.View`
margin-top:20px;
margin-left:5px;
`;

const Bigcarddata=[{
     Image:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/the-poster-of-thalapathy-vijays-68th-film-313712690-16x9_0.jpg?VersionId=_cBwFTIcNUio6W0XFAdiHM33yMq0bZbl&size=690:388"
},
{
     Image:"https://assets.thehansindia.com/h-upload/2020/12/26/1600x960_1020887-master.jpg"

},
{
  Image:"https://www.livemint.com/lm-img/img/2023/10/20/1600x900/leo_1695203139927_1697775674724.jpg"
}
]

const Mecarddata=[{
  Image: "https://img.etimg.com/thumb/width-1200,height-900,imgsize-49102,resizemode-75,msid-95774738/news/international/us/the-walking-dead-when-will-season-11-be-on-netflix-know-all-details-here.jpg"
},
{
  Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_bnBwxMVf_0tMlvVA8JDSZAAvUXoRUobARg&usqp=CAU"

},
{
Image:"https://upload.wikimedia.org/wikipedia/commons/3/38/Stranger_Things_logo.png"
}
]