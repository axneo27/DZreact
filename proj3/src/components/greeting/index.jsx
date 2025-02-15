
function userGreeting({isLoggedIn}) {
    // return <h1>{isLoggedIn ? "Welcome back!" : "Please sign up!" }</h1>
    return (
        <div>
            {isLoggedIn && <h1>You have a new message</h1>}
        </div>
    );
}

export default userGreeting;
