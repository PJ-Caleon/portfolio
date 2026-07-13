import TextPlaceholder from '../components/TextPlaceholder';
import ImagePlaceholder from '../components/ImagePlaceholder';
import dlsu from '../images/DLSU.jpg';
import dlsu2 from '../images/dlsu2.png';

function Education() {
    return (
        <div className="page" if="education">
            <h2>De La Salle University</h2>

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
                    <p>Bachelor of Science in Computer Engineering</p>
                    <p>From October 2020 to June 2026</p>
                    <p>I started college in Industrial Engineering for 1 year, not because I loved it, but because I heard it was easier. It didn't take long to realize that "easy" wasn't enough to keep me interested. The spark I felt whenever I coded or tinkered with systems just wasn't there in IE. So after a year, I made the switch to Computer Engineering.</p>
                    <p>People told me I was crazy. CpE was harder, longer hours, more math, more circuits, more late nights debugging things that didn't want to work. But I'd rather struggle with something I enjoy than coast through something I don't. And I was right. It was harder. But it was mine.</p>

                </TextPlaceholder>

                <ImagePlaceholder
                    src={dlsu}
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
                    src={dlsu2}
                    alt="Linux"
                    width="50%"
                    height="auto"
                    padding="5px"
                    position="left"
                />

                <TextPlaceholder
                    width="60%"
                    position="left"
                    textAlign="right"
                    fontSize="1.5rem"
                >
                    <p>DLSU taught me how to bridge hardware and software, writing C and Python for microcontrollers, debugging circuits, machine learning, and making embedded systems actually work. I learned to navigate Linux like a second language, automating workflows, managing systems, and living in the terminal.</p>
                    <p>But beyond the technical, DLSU taught me patience, that problems aren't personal, and the best debugger is a calm mind. I learned that collaboration isn't just about getting along, but about communicating clearly and documenting thoroughly. Most of all, DLSU taught me that curiosity is a skill you build by doing, I didn't wait to be taught; I built, broke, and rebuilt until I understood. The degree is just the paper. The real takeaway is knowing I can figure things out on my own.</p>
                </TextPlaceholder>
            </div>
        </div>
    );
}

export default Education;