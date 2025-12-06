import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import Container from './Container';
import useAuth from '../../hooks/useAuth';
import Logo from './Logo';

const Navbar = () => {
    const { user, signOutUserFunction, loading } = useAuth();
    const links = <>
        <li><NavLink to={"/"} className={"font-semebold"}>Home</NavLink></li>
        <li><NavLink to={"/clubs"} className={"font-semebold"}>Clubs</NavLink></li>
        <li><NavLink to={"/events"} className={"font-semebold"}>Events</NavLink></li>
        <li><NavLink to={"/pricing"} className={"font-semebold"}>Pricing</NavLink></li>
    </>


    return (
        <div className='shadow-sm bg-white/30 backdrop-blur  sticky top-0 z-50'>
            <Container>
                <nav>
                    <div className="navbar ">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                                </div>
                                <ul
                                    tabIndex="-1"
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                    {links}
                                </ul>
                            </div>
                            <Link to={"/"}>
                                <Logo></Logo>
                            </Link>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                {links}
                            </ul>
                        </div>
                        <div className="navbar-end">


                            {loading ? <span className="loading loading-ring loading-xl"></span> :
                                user ? (

                                    <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" className=" m-1">
                                            <img className='w-10 h-10 mx-auto rounded-full overflow-hidden border border-primary' src={user?.photoURL || "https://i.ibb.co.com/tp3xgXbG/avater.jpg"} alt="Avater" />

                                        </div>
                                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm space-y-3 text-center">

                                            {/* <Link to={"/profile"} className="tooltip" data-tip="Click to Profile">
                                                <img className='w-25 h-25 mx-auto rounded-full overflow-hidden border border-primary' src={user?.photoURL || "https://i.ibb.co.com/tp3xgXbG/avater.jpg"} alt="Avater" />
                                            </Link> */}
                                            <NavLink to={`/dashboard`} className={" font-semebold hover:underline"}>Dashboard</NavLink>
                                            <NavLink to={`/profile`} className={"font-semebold hover:underline"}>Profile</NavLink>

                                            <h2 className='text-xl font-semebold'>{user?.displayName}</h2>
                                            <p className='text-black'>{user?.email}</p>
                                            <button onClick={signOutUserFunction} className={"btn bg-primary hover:bg-secondary transition-colors  text-white"}>Sign Out</button>
                                        </ul>
                                    </div>
                                ) : (
                                    <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" className=" m-1">
                                            <img className='w-10 h-10 mx-auto rounded-full overflow-hidden border border-primary' src={user?.photoURL || "https://i.ibb.co.com/tp3xgXbG/avater.jpg"} alt="Avater" />

                                        </div>
                                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm space-y-3 text-center">
                                            <li>
                                            
                                            <Link
                                                to="/login"
                                                className="btn text-white bg-primary hover:bg-secondary border-none"
                                            >
                                                Log in
                                            </Link>
                                            </li>
                                            <li>
                                            
                                            <Link
                                                to="/register"
                                                className="btn text-white bg-secondary  hover:bg-primary border-none"
                                            >
                                                Register
                                            </Link>
                                            </li>

                                        </ul>
                                    </div>


                                )
                            }
                        </div>
                    </div>
                </nav>
            </Container>
        </div>
    );
};

export default Navbar;

