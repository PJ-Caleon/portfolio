import image from '../images/test.jpg';
import TextPlaceholder from '../components/TextPlaceholder';
import ImagePlaceholder from '../components/ImagePlaceholder';

function Linux() {
    return (
        <div className="page" id="linux" >
            <h2>Cachy OS</h2>

            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                gap: "5%",
                marginBottom: "1.5rem"
            }}>
                <TextPlaceholder
                    width="60%"
                    position="right"
                    textAlign="left"
                    fontSize="1.5rem"
                >
                    <p>Bachelor of Science in computer engineering with hands-on experience in microcontrollers, Linux, C, and Python. Adaptable and naturally curious, I consistently apply what I learn through personal projects to deepen my understanding. Looking for an opportunity to further develop these skills while contributing to meaningful engineering work.</p>
                </TextPlaceholder>

                <ImagePlaceholder
                    src={image}
                    alt="Linux"
                    width="50%"
                    height="auto"
                    padding="5px"
                    position="right"
                />
            </div>

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
                    <p>I easily get bored and do random projects at the top of my head. Usually try to make it computer related to improve on my own skills and have a fun project while at it. Like this website, this is my first website that uses the react framework.</p>
                </TextPlaceholder>
            </div>
        </div>
    );
}

export default Linux;