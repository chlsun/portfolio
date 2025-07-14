import './Header.css';

const Header = () =>{
    return(
        <div id="header">
            <div className="menus">
                <nav className="tab">About Me</nav>
                <nav className="tab">Skills</nav>
                <nav className="tab">Projects</nav>
            </div>
        </div>
    )
}

export default Header;