import Basket from '../../assets/icons/basket.svg';
import Search from '../../assets/icons/search-normal.svg';
import Logo from '../../assets/imgs/logo1.png';
import './nav-bar.sass';
const NavBar = () => {
  return (
    <>
      <nav>
        <div className="container">
          <div className="row ">
            <div className="nav_logo col-md-1">
              <a href="#"><img src={Logo} alt="logo" className="logo"/></a>
            </div>
            <ul className="menu col-md-6 offset-md-1">
              <li className=" menu_item">Home</li>
              <li className=" menu_item">Products</li>
              <li className=" menu_item">Blog</li>
              <li className=" menu_item">FAQ</li>
              <li className=" menu_item">Contact Us</li>
            </ul>
            <div className="action_btns col-md-3 offset-md-1">
              <a href="#"><img id={'search'} src={Search} className="action_img" alt="loop"/></a>
              <a href="#"><img src={Basket} className="action_img" alt="basket"/></a>
              <button>
                Login / Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
      <hr/>
    </>
  )
}

export default NavBar;