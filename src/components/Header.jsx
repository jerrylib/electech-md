

const Header = () => {
  return (
    <header 
      className="page-header min-h-[80px] bg-white border-b border-gray-200 w-full m-0 p-0" 
      id="home"
    >
      <div className="rd-navbar-wrap w-full h-[106px] flex">
        <nav
          className="rd-navbar rd-navbar_half-dark relative w-full px-3 flex"
          data-layout="rd-navbar-fixed"
          data-sm-layout="rd-navbar-fixed"
          data-sm-device-layout="rd-navbar-fixed"
          data-md-layout="rd-navbar-fixed"
          data-md-device-layout="rd-navbar-fixed"
          data-lg-device-layout="rd-navbar-fixed"
          data-xl-device-layout="rd-navbar-static"
          data-xxl-device-layout="rd-navbar-static"
          data-lg-layout="rd-navbar-fixed"
          data-xl-layout="rd-navbar-static"
          data-xxl-layout="rd-navbar-static"
          data-stick-up-clone="false"
          data-sm-stick-up="true"
          data-md-stick-up="true"
          data-lg-stick-up="true"
          data-xl-stick-up="true"
          data-xxl-stick-up="true"
          data-lg-stick-up-offset="69px"
          data-xl-stick-up-offset="100px"
          data-xxl-stick-up-offset="100px"
        >
          <div 
            className="rd-navbar-inner flex items-center align-center justify-between max-w-7xl gap-36 mx-auto w-full"
          >
            <div className="rd-navbar-panel">
              <button
                className="rd-navbar-toggle hidden"
                data-rd-navbar-toggle=".rd-navbar-nav-wrap"
              >
                <span></span>
              </button>
              <div className="rd-navbar-brand">
                <a className="brand-name block" href="/">
                  <img 
                    src="/images/image.png" 
                    alt="Toast Duck Logo" 
                    width="176" 
                    height="88"
                    className="max-h-[60px] w-auto scale-[1.5]"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'inline';
                    }}
                  />
                  <span className="hidden text-2xl font-bold text-gray-800">
                    Toast Duck
                  </span>
                </a>
              </div>
            </div>
            <div className="rd-navbar-nav-wrap flex items-center gap-8 flex-cols">
              <ul className="rd-navbar-nav flex m-0 p-0 gap-6">
                <li className="flex">
                  <a href="#home" className="text-black content-center hover:text-sky-400 transition-colors duration-200">
                    Home
                  </a>
                </li>
                <li className="flex">
                  <a href="https://toastduck.com" target="_blank" rel="noopener noreferrer" className="text-black content-center hover:text-sky-700 transition-colors duration-200">
                    Store
                  </a>
                </li>
                <li className="flex">
                  <a href="#services" className="text-black content-center hover:text-sky-400 transition-colors duration-200">
                    Services
                  </a>
                </li>
                <li className="flex">
                  <a href="#about" className="text-black content-center hover:text-sky-400 transition-colors duration-200">
                    About
                  </a>
                </li>
                <li className="flex">
                  <a href="#gallery" className="text-black content-center hover:text-sky-400 transition-colors duration-200">
                    Portfolio
                  </a>
                </li>
                <li className="flex">
                  <a href="#team" className="text-black content-center hover:text-sky-400 transition-colors duration-200">
                    Team
                  </a>
                </li>
                <li className="flex">
                  <a href="#news" className="text-black content-center hover:text-sky-400 transition-colors duration-200">
                    News
                  </a>
                </li>
                <li className="flex">
                  <a href="#clients" className="text-black content-center hover:text-sky-400 transition-colors duration-200">
                    Clients
                  </a>
                </li>
                <li className="flex">
                  <a href="#contacts" className="text-black content-center hover:text-sky-400 transition-colors duration-200">
                    Contacts
                  </a>
                </li>
              </ul>
              
              {/* Get a quote 按钮 - 放在最右边 */}
              <div className="rd-navbar-nav-wrap__element">
                <a className="btn btn-gray-light-outline rd-none" href="#">Get a quote</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;