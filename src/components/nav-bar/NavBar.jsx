import Basket from '../../assets/icons/basket.svg';
import Search from '../../assets/icons/search-normal.svg';
import Logo from '../../assets/imgs/logo1.png';
import './nav-bar.sass';
import {Link} from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <nav>
        <div className="container">
          <div className="row ">
            <div className="nav_logo col-md-1">
              <Link to={'/'}><img src={Logo} alt="logo" className="logo"/></Link>
            </div>
            <ul className="menu col-md-6 offset-md-1">
              <li className=" menu_item"><Link to={'/'}>Home</Link> </li>
              <li className=" menu_item"><Link to={'/produkti'}>Products</Link> </li>
              <li className=" menu_item"><Link to={'/blogs'}>Blog</Link></li>
              <li className=" menu_item"><Link to={'/faq'}>FAQ</Link></li>
              <li className=" menu_item"><Link to={'/kontakti'}>Contact Us</Link></li>
            </ul>
            <div className="action_btns col-md-3 offset-md-1">
              <a href="#"><img id={'search'} src={Search} className="action_img" alt="loop"/></a>
              <Link to={'/account'}><img src={Basket} className="action_img" alt="basket"/></Link>
              <Link to={'/login'}>
                <button>
                  Log in / Sign Up
                </button>
              </Link>

            </div>
          </div>
        </div>
      </nav>
      <hr/>
    </>
  )
}

export default NavBar;