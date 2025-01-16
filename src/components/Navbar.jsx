import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
      {/* <NavLink to='/'>
        <img src={logo} alt='logo' className='w-30 h-18 object-contain' />
      </NavLink> */}
      <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
            <p className="blue-gradient_text">YS</p>
        </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-yellow-600" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-yellow-600"}>
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
