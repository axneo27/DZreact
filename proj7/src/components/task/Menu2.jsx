import { Link } from "react-router-dom";

function Menu2() {
    return (
        <>
            <h2>Menu</h2>
            {/* <nav>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Privacy</a>
            </nav> */}
            <nav>
                <Link to="/">Home</Link>
                <Link to="/biography">Biography</Link>
                <Link to="/best-picture">Best picture</Link>
                <Link to="/pictures">Pictures</Link>    
            </nav>
        </>
    );
}

export default Menu2;