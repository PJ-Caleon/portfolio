import image from '../images/test.jpg';

function Projects(){
    return (
        <div className="page" id="projects">
            <h2>Glove Controller</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>
            <img src={image} alt="Glove Controller" />
        </div>
    );
}

export default Projects;