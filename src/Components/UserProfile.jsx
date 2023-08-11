// UserProfile is a component that will be rendered by App.

function UserProfile() {
    return (
        <div className="userprofile">
            <img src="src/profile.png" alt=" profile-photo-silhouette" />
            <div className="usercredentials">
                <h2>Alvin Johnson</h2>
                <h4>React Developer</h4>
                <p>Lorem ipsum</p>
            </div>
        </div >
    )
}
export default UserProfile;