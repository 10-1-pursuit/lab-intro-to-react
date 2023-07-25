import Posts from "./Posts"

export default function Post() {
 return (
    <>
    <div className="postbox">
        <h3>{Posts.title}</h3>
        <p>{Posts.description}</p>
    </div>
    </>
 )

}