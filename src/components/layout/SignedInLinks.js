import  React  from "react";
import {NavLink} from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className="btn btn-floating pink lighten-1">NV</NavLink></li>
            <li><NavLink to='/youtube' className="btn btn-floating pink lighten-1">
                <i className="material-icons">ondemand_video</i></NavLink>
            </li>
        </ul>
    )
}

export default SignedInLinks;