import { Link } from "react-router-dom";

function Menu3() {
    return (
        <>
            <h2>Menu</h2>
            <nav>
                <Link to="/">Home</Link> 
                <Link to="/great-wall">Great Wall of China</Link>
                <Link to="/chichen">Chichén Itzá</Link>
                <Link to="/petra">Petra</Link>
                <Link to="/machu">Machu Picchu</Link>
                <Link to="christ">Christ the Redeemer</Link>
                <Link to="/colosseum">Colosseum</Link>
                <Link to="taj-mahal">Taj Mahal</Link>
            </nav>
        </>
    );
}

export default Menu3;