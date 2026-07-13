function Contact(){
    const handClick = (buttonName) => {
        alert(`You clicked the "${buttonName}" button! It does nothing else.`);
    };
    return (
        <div className="page" id="contact">
            <h2>Contact</h2>

            <div className="contact-buttons">
                <button className="btn" onClick={() => handClick('LinkedIn')}>
                    LinkedIn
                </button>
                <button className="btn" onClick={() => handClick('GitHub')}>
                    GitHub
                </button>
                <button className="btn" onClick={() => handClick('Gmail')}>
                    Gmail
                </button>
            </div>
        </div>
    );
}

export default Contact;