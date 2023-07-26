import '/src/css/UserProfile.css';

const UserProfile = () => {
    return (
        <div className="user-profile">
            <div className="user-profile-img">
                <img src='/src/profile.png' alt="profile" />
            </div>
            <div className="user-profile-info">
                <h1>Username</h1>
                <h2>React Expert</h2>
                <p>Lorem Ipsum</p>
            </div>
        </div>
    );
};

export default UserProfile;
        