import profilePicture from "../profile.png";
import "./UserProfile.css";

// UserProfile.jsx

function UserProfile() {
  return (
    <>
      <div
        className="user-profile"
        style={{ border: "1px solid black", borderRadius: "5px" }}
      >
        <img src={profilePicture} alt="profile" width="100" height="100" />
        <h2>Jordan Walke</h2>
        <h3>React Creator</h3>
        <h4>Lorem Ipsum</h4>
      </div>
    </>
  );
}

export default UserProfile;
