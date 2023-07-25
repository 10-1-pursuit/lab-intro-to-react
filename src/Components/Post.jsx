import Posts from "./Posts"

export default function Post() {
 return (
    <>
    <div>
        <h3>{Posts.title}</h3>
        <p>{Posts.description}</p>
    </div>
    </>
 )

}