const Profile = ({user}) => {
    return (
        <div className="navbar-account">
            <h2>Account</h2>
            <div>
                <img src={user.profile} alt={user.name} />
                <section>
                    <h3>{user.name}</h3>
                    <h4>{user.email}</h4>
                </section>
            </div>
        </div>
    );
}
 
export default Profile;