import image from '../images/test.jpg';
import TextPlaceholder from '../components/TextPlaceholder';
import ImagePlaceholder from '../components/ImagePlaceholder';

function Projects() {
    return (
        <div className="page" id="projects">
            <h2>Development of Touch and Motion Based Glove Controllers
                with Applications for
                3D Media Creation in Virtual Reality </h2>

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
                    <p>
                        This thesis project describes the design and development of glove controllers for use
                        in 3D media creation software within a Virtual Reality workspace such as 3D
                        modeling and visualizations. The inputs from the sensors will be processed
                        through a host computer’s companion application that will interface with the
                        chosen 3D media creation software, Blender, and the Blender Extension
                        Freebird XR, for integration with Virtual Reality. The controllers allow for 3D
                        media creation to take place in a 3D plane input environment as opposed to 2D
                        plane inputs such as keyboard and mouse or drawing tablets, which have
                        limitations in scale, applications, and efficiency in a VR setting. The sensors for
                        input are capacitive touch sensors, flex sensors, and a gyroscope-accelerometer
                        sensor, which are to be integrated with ESP32 microcontrollers to process
                        human finger and hand movement and translate the movements to remote
                        digital inputs from a distance using the wireless Bluetooth module of the
                        microcontrollers.
                    </p>
                </TextPlaceholder>

                <ImagePlaceholder
                    src={image}
                    alt="Linux"
                    width="75%"
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
                <TextPlaceholder
                    width="60%"
                    position="right"
                    textAlign="left"
                    fontSize="1.5rem"
                >
                    <p>
                        My main role and contribution to this project was designing the UI/UX of the
                        input monitor using Python, where glove controller inputs are sent via Bluetooth
                        to the Arduino IDE and then to the main Python script. I collected data from the
                        main script and displayed it on the UI monitor, while also assisting with backend
                        data packet transmission alongside my team members. As the project neared
                        completion in 2026, my role expanded significantly, I improved the GUI with
                        additional monitoring and configuration functions, designed the software
                        architecture to route hardware data to FreebirdXR without asynchronous issues,
                        and took full responsibility for documenting the entire thesis, including setting up
                        all graphs, recording results, and analyzing performance data. The completed
                        system achieved a 98% gesture recognition accuracy and maintained latency
                        under 200ms, successfully translating glove inputs into Blender's VR
                        environment for 3D creation.
                    </p>

                    <a
                        href="https://drive.google.com/file/d/1Ab_HD7z7to4knzJUc3DS2wz6NC0gePkI/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-link"
                    >
                        View research paper
                    </a>
                </TextPlaceholder>

                <ImagePlaceholder
                    src={image}
                    alt="Linux"
                    width="75%"
                    height="auto"
                    padding="5px"
                    position="right"
                />
            </div>
            {/* ----------------- */}

            <h2>NXP Board LCD Integration</h2>

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
                    position="left"
                    textAlign="left"
                    fontSize="1.5rem"
                >
                    <p>
                        One of my main projects in Dyson was integrating an LCD display with an ARM-based NXP board.
                        There was no built-in library for the LCD only an I2C bus. After studying the NXP manual
                        and understanding how the LCD communicated with the MCU, I adapted an Arduino I2C LCD library
                        to work with the NXP's architecture. I rewrote the communication logic to match the NXP's pin
                        configuration and register mappings, and successfully flashed the program to display status
                        reports on the LCD. This was a completely original solution. I couldn't find any existing
                        documentation for this approach, so I had to figure it out from scratch. Once it worked,
                        I documented the entire process for future interns.
                    </p>
                </TextPlaceholder>

                <TextPlaceholder
                    width="60%"
                    position="left"
                    textAlign="left"
                    fontSize="1.5rem"
                >
                    <h3>Main Contribution</h3>
                    <ul>
                        <li>Developed an LCD driver from scratch using the NXP's I2C bus</li>
                        <li>Adapted Arduino library code to work with ARM-based architecture</li>
                        <li>Successfully displayed real-time board status on the LCD</li>
                    </ul>
                </TextPlaceholder>
            </div>

            {/* ----------------- */}

            <h2>Unit Testing & CI/CD</h2>

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
                    position="left"
                    textAlign="left"
                    fontSize="1.5rem"
                >
                    <p>
                        In Dyson I also worked on setting up and integrating unit testing frameworks for
                        embedded software projects. The goal was to ensure code reliability and catch issues
                        early in the development cycle. I created unit tests for board functionalities, debugged
                        test cases to run locally on any PC, and integrated them into Dyson's Bamboo CI/CD pipeline. I
                        also explored mocking techniques for isolated code testing and helped resolve build script
                        issues that were preventing successful flashes to the board. The test cases I wrote became part of
                        the team's continuous integration workflow, improving code quality and reducing manual testing effort.
                    </p>

                </TextPlaceholder>

                <TextPlaceholder
                    width="60%"
                    position="left"
                    textAlign="left"
                    fontSize="1.5rem"
                >
                    <h3>Main Contribution</h3>
                    <ul>
                        <li>Built unit testing framworks for embedded C code</li>
                        <li>Integrated test cases into Bamboo CI/CD pipelines</li>
                        <li>Debugged test execution issues across different environments</li>
                        <li>Assisted in resolving build script and flashing issues</li>
                        <li>Explored mocking techniques for isolated testing</li>
                    </ul>
                </TextPlaceholder>
            </div>

            {/* ----------------- */}

            <h2>Product Development Immersion</h2>

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
                    position="left"
                    textAlign="left"
                    fontSize="1.5rem"
                >
                    <p>
                        The PDI project was a cross-functional capstone done for Dyson that simulated real product development
                        from requirements gathering to stakeholder presentation. I worked on the software side
                        of the project, contributing to UI development using PyQt5 and integrating it with an
                        STM32 microcontroller. I also helped design the circuit diagram, wrote code for sensors
                        and actuators, and presented technical progress to stakeholders. The project brought
                        together interns from different departments, giving me experience in collaboration,
                        agile workflows, and communicating technical ideas to non-technical audiences.
                    </p>
                </TextPlaceholder>

                <TextPlaceholder
                    width="60%"
                    position="left"
                    textAlign="left"
                    fontSize="1.5rem"
                >
                    <h3>Main Contribution</h3>
                    <ul>
                        <li>Developed the software side of the project (PyQt5 UI + STM32 integration)</li>
                        <li>Designed and updated circuit schematics (buzzer, LED, button, stepper motor)</li>
                        <li>Wrote code for sensor detection and actuator control</li>
                        <li>Presented board bring-up and software progress to stakeholders</li>
                        <li>Collaborated with cross-functional teams in agile environment</li>
                    </ul>
                </TextPlaceholder>
            </div>

            {/* ----------------- */}
            <h2>Face Recognition Model Integrated on Raspberry Pi 4</h2>

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
                    width="75%"
                    height="auto"
                    padding="5px"
                    position="left"
                />
                <TextPlaceholder
                    width="60%"
                    position="right"
                    textAlign="right"
                    fontSize="1.5rem"
                >
                    <p>
                        The purpose of this project was to create a face recognition model integrated
                        into a Raspberry Pi 4 Model B. It used a webcam to observe faces and drew a
                        bounding box around detected faces. If the face matched the trained model, the
                        terminal output indicated recognition; if not, it did not recognize the face. The
                        project used existing Python libraries: face_recognition for encoding and
                        comparing facial features, cv2 for video and image processing, and pickle for
                        model serialization and saving face encodings.
                    </p>
                </TextPlaceholder>
            </div>

            {/* ----------------- */}

            <h2>Down Counter with 7 Segment Display</h2>

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
                    <p>
                        This is an individual academic project where the task is to create a PIC16F877A
                        counter with a keypad that initially sets the counter's value. This is then reflected
                        on the 7 segment. A start button is added to start the countdown and a pause
                        button is added to pause the count. There are 3 LEDs that display the status of
                        the counter. Greed LED on indicates the count down. A red LED indicates the
                        pause. Lastly a blue LED indicates the timer has reached 0.
                    </p>
                </TextPlaceholder>

                <ImagePlaceholder
                    src={image}
                    alt="Linux"
                    width="75%"
                    height="auto"
                    padding="5px"
                    position="right"
                />
            </div>

            {/* ----------------- */}

            <h2>Basic AVR Password Lock</h2>

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
                    width="75%"
                    height="auto"
                    padding="5px"
                    position="left"
                />
                <TextPlaceholder
                    width="60%"
                    position="right"
                    textAlign="right"
                    fontSize="1.5rem"
                >
                    <p>
                        First project using ATmega328, practicing on learning the AVR framework. As
                        well as learning how to use EEPROM read and write function to allow the
                        system to remember a state even after the system is turned off.
                    </p>
                </TextPlaceholder>
            </div>

            {/* ----------------- */}

            <h2>Face Tracking with Arduino & OpenCV</h2>

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
                    <p>
                        This project tracks the face of the user using a Python OpenCV program that
                        sends data to the Arduino IDE to be sent to the servo SG90 to reflect the
                        movement of the user in real time.This project was made as a side project while
                        having a course for Computer Vision. This project could be expanded for motion
                        tracking designs with actuators reacting to certain situations of what the camera
                        could detect.
                    </p>
                </TextPlaceholder>

                <ImagePlaceholder
                    src={image}
                    alt="Linux"
                    width="75%"
                    height="auto"
                    padding="5px"
                    position="right"
                />
            </div>
        </div>
    );
}

export default Projects;