import Posts from "./Posts"

export default function Post() {
 return (
    <>
    <div className="postbox">
        <h3>{Posts[1].title}</h3>
        <p>{Posts[1].description}</p>
    </div>
    </>
 )

}