import TextPlaceholder from '../components/TextPlaceholder';
import ImagePlaceholder from '../components/ImagePlaceholder';
import image from '../images/test.jpg';
import Button from '../components/Button';
import resume from '../philipjeremiahcaleon-resume.pdf';

function About() {
  return (
    <div className="page" id="about">
      <h2>Philip Jeremiah M. Caleon</h2>

      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        gap: "5%",
        marginBottom: "1.5rem"
      }}>
        <ImagePlaceholder
          src={image}
          alt="Linux"
          width="50%"
          height="auto"
          padding="5px"
          position="left"
        />

        <TextPlaceholder
          width="60%"
          position="left"
          textAlign="left"
          fontSize="1.5rem"
        >
          <p>Or PJ for short — A recent graduate of De La Salle Univerisity (Taft, Philippines) with a Bachelor of Science in Computer Engineering. I have hands-on experience in microcontrollers, Linux, C, and Python. Adaptable and naturally curious, I consistently apply what I learn through personal projects to deepen my understanding. Looking for an opportunity to further develop these skills while contributing to meaningful engineering work.</p>
          <p>I easily get bored and do random projects at the top of my head. Usually try to make it computer related to improve on my own skills and have a fun project while at it. Like this website, this is my first website that uses the react framework.</p>

          <Button
            href={resume}
            download="philipjeremiahcaleon-resume.pdf"
            variant="primary"
            size="medium"
          >
            Download Resume
          </Button>

        </TextPlaceholder>
      </div>
    </div>
  );
}

export default About;