import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
          <div className="container">
            <nav className="navbar">
              <a className="navbar-brand" href="/"> <h2 className="page-title"> Ice cream </h2> </a>
              <div className="collapse">
                <span className="nav-item active">
                  <Link className="nav-link" to="/">
                    <span className="text"> Home </span>
                    <span className="line -right"></span>
                    <span className="line -top"></span>
                    <span className="line -left"></span>
                    <span className="line -bottom"></span>
                  </Link>
                </span>
                <span className="nav-item">
                  <Link className="nav-link" to="/AddIceCream">
                    <span className="text"> Add Ice Cream </span>
                    <span className="line -right"></span>
                    <span className="line -top"></span>
                    <span className="line -left"></span>
                    <span className="line -bottom"></span>
                  </Link>
                </span>
              </div>
            </nav>
          </div>
      </header>
    );
}

export default Header;