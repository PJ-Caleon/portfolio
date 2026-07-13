import debian from '../images/debian.jpeg';
import arch from '../images/arch.png';
import cachy_DE from '../images/cachyOS_DE.png';
import cachy_ff from '../images/fastfetch_cachyOS.png';
import TextPlaceholder from '../components/TextPlaceholder';
import ImagePlaceholder from '../components/ImagePlaceholder';

function Linux() {
    return (
        <div className="page" id="linux" >
            <h2>Debian</h2>

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
                    <p>Debian was my first Linux OS after switching from Windows. Unfortunately, I accidentally broke it while tinkering with config files (no backup, because my storage was already bloated with applications I forgot to uninstall from my college days). This is the last screenshot I have of that setup KDE Plasma on Wayland. Debian was solid, but switching to an Arch-based distro opened my eyes to the power of rolling releases. More packages, fresher updates, and most importantly I can finally use my GPU drivers properly.</p>
                </TextPlaceholder>

                <ImagePlaceholder
                    src={debian}
                    alt="Linux"
                    width="75%"
                    height="auto"
                    padding="5px"
                    position="right"
                />
            </div>

            <h2>Arch</h2>

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
                    src={arch}
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
                    <p>Back in 2025, when I was still new to Linux, I watched videos of people struggling to install Arch. It was funny and I wanted to try it myself. I failed. Miserably. I didn't understand the terminology: fdisk, lsblk, disk partitions, bootloaders, kernels none of it clicked. So I gave up and went with Debian instead.</p>
                    <p>A year later, with more experience under my belt, I decided to try again but this time, in a virtual machine. If I broke something, it wouldn't matter. I went through the manual Arch install process, and this time, I actually understood what I was doing. I knew how to use the Arch Wiki, had a basic grasp of Vim keys, and could follow the steps without feeling completely lost.</p>
                    <p>It wasn't smooth sailing the bootloader gave me trouble (I kept getting dropped into a GRUB terminal on reboot, which Debian never did), and I initially forgot to create a non-root user, so SDDM showed nothing until I fixed that. But I got there. I installed KDE (because I'd already been through enough), logged in, and felt genuinely accomplished.</p>
                    <p>I took a screenshot of fastfetch before wiping the VM. That one screenshot meant more than it probably should have.</p>
                </TextPlaceholder>
            </div>

            <h2>Cachy</h2>

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
                    src={cachy_DE}
                    alt="Linux"
                    width="75%"
                    height="auto"
                    padding="5px"
                    position="right"
                />

                <TextPlaceholder
                    width="60%"
                    position="right"
                    textAlign="right"
                    fontSize="1.5rem"
                >
                    <p>After I accidentally destroyed Debian... and I mean destroyed... I watched in real time as each component lost its custom textures, reverted to default, and slowly stopped functioning. I checked the files. They were blank. Just... empty. That was the moment I knew I couldn't salvage it.</p>
                    <p>I wanted to try Arch, but it still felt too advanced and I needed a working computer, not a weeks-long project. So I went with CachyOS. It's Arch-based, but with sensible defaults and almost no bloat. It gave me the Arch foundation without the pain of manual installation.</p>
                    <p>The result? Clean, fast, and for the first time my GPU actually works.</p>
                </TextPlaceholder>
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
                    <p>This is my current setup: CachyOS with Niri. A sliding Wayland compositor. Every new window slides in from the right, and it's clean, fast, and doesn't lag my aging laptop.</p>
                    <p>The learning curve was real. Unlike KDE, there's no GUI for settings everything lives in config files. And most of the time, things didn't work because I didn't read the documentation first. But I got there. Inactive windows are transparent, active windows have a pink border (Rose Pine theme, originally blue), and everything feels intentional.</p>
                    <p>This time, I also set up a script that automatically pushes my config files to GitHub. If I break my system again and I probably will I won't lose everything.</p>
                    <p>The setup's still a work in progress. But it's mine. And yes, my favorite quintuplet is Nino Nakano.</p>
                </TextPlaceholder>

                <ImagePlaceholder
                    src={cachy_ff}
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

export default Linux;