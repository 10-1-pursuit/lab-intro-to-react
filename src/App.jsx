import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Post from "./Components/Post"
import "/src/App.jsx"

import Contacts from "./Components/Contacts";

import ContactUserCard from "./Components/ContactUserCard";
import { Container, Header, Footer, Content, Nav,
  Sidebar } from "rsuite";
import "rsuite/dist/rsuite.min.css";

function App() {

 
  return(

//     <Container>
//     <Header><NavBar/></Header>
// <Content><p><UserProfile/></p></Content>
  
//     {/* <Content><UserProfile/><><div><Contacts/></div><div><Posts/><></></div><><ContactUserCard/></></></Content> */}
//     <Footer><div><Posts/><Post/></div><div><Contacts/></div></Footer>
// </Container>
    
    <>
    <Container><Header><NavBar/></Header> 
    <div class="one"><UserProfile/></div></Container>
    <Posts/>
    <Post/>
    <Content><Contacts/>

    </Content>
    <Footer>    <ContactUserCard/></Footer>
    
   
   {/* <UserProfile/>
   <Posts/>
   <Post/>
   <Contacts/>
   <ContactUserCard/> */}
 
 
  
   </>
  

 
  

  
  
  
   ) ;
}

export default App;
