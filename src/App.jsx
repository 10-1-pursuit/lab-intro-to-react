
import UserProfile from "./Components/UserProfile";
import NavBar from "./Components/NavBar"
import Post from './Components/Post'
import Contacts from './Components/Contacts'



import './index.css'



function App() {
  return (
    <div className="App">
<NavBar />
<UserProfile />
      <Contacts />
      
      
      <Post />
      </div>
    

  )
}

export default App
