import './Header.css';

const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 60;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
};

const Header = () => {
    return (
        <div id="header">
            <div className="menus">
                <nav className="tab" onClick={() => scrollToSection('about')}>About Me</nav>
                <nav className="tab" onClick={() => scrollToSection('skills')}>Skills</nav>
                <nav className="tab" onClick={() => scrollToSection('projects')}>Projects</nav>
            </div>
        </div>
    );
};

export default Header;