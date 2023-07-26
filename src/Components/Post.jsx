import React from "react"
import Posts from "./Posts.jsx"

function Post (){
    return (
        <div className="Post">


            <p>{Posts.title}</p>

            <p>{Posts.description}</p>
        </div>
    )
}
export default Post