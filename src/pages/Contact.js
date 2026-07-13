import TextField from '../components/TextField';

function Contact() {
    return (
        <div className="page" id="contact">
            <h2>Contact</h2>

            <div className="contact-grid">
                <div className="contact-left">
                    <div className="contact-buttons">
                        <a
                            href="https://linkedin.com/in/pj-caleon"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/PJ-Caleon"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
                <div className="contact-right">
                    <TextField />
                </div>
            </div>
        </div>
    );
}

export default Contact;