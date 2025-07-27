import { useState } from "react";

const Accordion = ({ title, children }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="accordion-section">
            <button className="accordion-toggle" onClick={() => setOpen(!open)}>
                <span>{title}</span>
                <span className={`arrow ${open ? 'open' : ''}`}>▼</span>
            </button>
            {open && <div className="accordion-content">{children}</div>}
        </div>
    );
};

export default Accordion;