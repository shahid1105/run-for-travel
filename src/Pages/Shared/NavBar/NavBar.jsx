import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div>
      {/* <Container> */}
        <div className="navbar z-10 absolute text-white flex justify-between px-24">
          <div className="">
            <a className="btn btn-ghost normal-case text-xl">2rism</a>
          </div>
          <div>
            <ul className="flex gap-8 justify-center">
              <li><Link>Home</Link></li>
              <li><Link>Hotels</Link></li>
              <li><Link>Restaurants</Link></li>
              <li><Link>Tours</Link></li>
              <li><Link>Destinations</Link></li>
              <li><Link>Activities</Link></li>
              <li><Link>Contact</Link></li>
              
            </ul>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-400 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      {/* </Container> */}
    </div>
  );
};

export default NavBar;
