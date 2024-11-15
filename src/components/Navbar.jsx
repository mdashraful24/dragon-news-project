import { Link } from "react-router-dom";
import userIcon from "../assets/user.png"

const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="div"></div>
            <div className="nav space-x-5">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/career'>Career</Link>
            </div>
            <div className="login flex items-center gap-2">
                <div className="w-7">
                    <img className="w-full" src={userIcon} alt="userIcon" />
                </div>
                <Link to="/auth/login" className="btn btn-neutral btn-sm rounded-none px-7">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;