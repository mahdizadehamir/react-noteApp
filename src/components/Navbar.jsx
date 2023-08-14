import LogoSVG from '../assets/411546.png'
function Navbar() {
  return (
    <div className="flex flex-row justify-between px-10 py-3 items-center">
    <div className="Logo">
       <img src={LogoSVG} alt="logo" width="100" />
    </div>
      <ul className="flex flex-row justify-between items-center w-1/2" >
        <li>Products</li>
        <li>Solutions</li>
        <li>Resources</li>
        <li>Enterprise</li>
      </ul>
      <div className="login-button">
        <button>Login</button>
      </div>
    </div>
  );
}

export default Navbar;
