import React from 'react'
import {Link} from "react-router-dom";
import NotFound from "../../views/examples/NotFound";

const Menu = (props) => {
    return (
        <aside className={Menu}>
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/params/123"}>Params</Link></li>
                    <li><Link to={"/naoExiste"}>NaoExiste</Link></li>
                </ul>
            </nav>
        </aside>
    );
};

export default Menu;
