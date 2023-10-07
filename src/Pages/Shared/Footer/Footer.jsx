import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-[#F9F9F9] text-base-content">
        <div>
      <aside>
    <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
    <p className='mt-4'>We always make our customers happy by <br /> providing as many choises as possible</p>
  </aside> 

  <nav>
    <div className="flex gap-4 mt-6">
      <a><FaFacebook className='w-8 h-8 text-[#5243C2]'></FaFacebook></a> 
      <a><FaTwitter className='w-8 h-8 text-[#FF5403]'></FaTwitter></a> 
      <a><FaInstagram className='w-8 h-8 text-[#FF5403]'></FaInstagram></a>
    </div>
  </nav>
        </div>

        <nav>
          <header className="footer-title">About</header>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">News</a>
          <a className="link link-hover">Menu</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">Why 2rism</a>
          <a className="link link-hover">Partner With Us</a>
          <a className="link link-hover">FAQ</a>
          <a className="link link-hover">Blog</a>
        </nav>
        <nav>
          <header className="footer-title">Support</header>
          <a className="link link-hover">Account</a>
          <a className="link link-hover">Support Center</a>
          <a className="link link-hover">Feedback</a>
          <a className="link link-hover">Contact Us</a>
        </nav>
        <form>
          <header className="footer-title">Subscribe on our destination <br /> review newsletters</header>
          <fieldset className="form-control min-w-fit">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn bg-[#FF5403] absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default Footer;
