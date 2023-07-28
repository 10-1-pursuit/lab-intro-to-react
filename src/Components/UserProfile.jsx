const UserProfile = () => {
    const user = {
        profileImage: 'assets/profile.png',
        name: 'Marcia Foster',
        jobTitle: 'React Creator' }
    
        return (
            <div style={{ textAlign: 'center' }}>
              <img src={user.profileImage} alt="Profile" style={{ borderRadius: '50%', width: '150px', height: '150px' }} />
              <h2>{user.name}</h2>
              <p>{user.jobTitle}</p>
            </div>
          );
        };
export default UserProfile;