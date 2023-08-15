import LogoSVG from '../assets/411546.png';
//animation
import NavAnimation from './shared/navanimation';
function Navbar() {
  return (
    <NavAnimation>
      <div className="flex flex-row justify-between px-10 py-3 items-center  ">
        <div className="Logo">
          <img src={LogoSVG} alt="logo" width="75" />
        </div>
        <ul className="flex flex-row justify-between items-center w-1/2">
          <li>Products</li>
          <li>Solutions</li>
          <li>Resources</li>
          <li>Enterprise</li>
        </ul>
        <div className="login-button">
          <button className='bg-blue-700 px-3 py-2 rounded-xl hover:opacity-75'>Login</button>
        </div>
      </div>
    </NavAnimation>
  );
}

export default Navbar;
