import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import avatarImg from '../../../assets/images/avatar.jpg';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.log(error));
    };
    return (
        <div>
            <div className="navbar bg-[#22174B] shadow-2xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/colleges'>Colleges</Link></li>
                            <li><Link to='/admission'>Admission</Link></li>
                            <li><Link to='/mycolleges'>My Colleges</Link></li>
                            <li><Link to='/contact'>Contact Us</Link></li>

                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case md:text-3xl">Study<span className="text-[#a59be5]">Camp</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/colleges'>Colleges</Link></li>
                        <li><Link to='/admission'>Admission</Link></li>
                        <li><Link to='/mycollege'>My College</Link></li>
                        <li><Link to='/contact'>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? (
                        <>
                            <button onClick={handleLogOut} className="btn bg-[#3420b4] text-white">Log Out</button>
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL} alt="User Avatar" />
                            </div>
                        </>
                    ) : (
                        <>
                            <Link to='/login' className="btn bg-[#3420b4] text-white mr-1">Login</Link>
                            <div className="w-10 rounded-full">
                                <img src={avatarImg} alt="Default Avatar" />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;