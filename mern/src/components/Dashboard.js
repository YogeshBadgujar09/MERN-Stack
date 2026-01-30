
function Dashboard({ user }) {
    return (
        <div style={{ padding: "20px" }}>
            <h1>Welcome, {user.fullName}</h1>
            <p>Email: {user.email}</p>
            <p>Mobile: {user.mobile}</p>
        </div>
    );
}

export default Dashboard;