import coding from "../assets/coding.png"

export default function AboutMe() {
    return (
        <>
            <div className="row justify-content-center align-items-center text-center mx-5 about-me-container">
                <div className="col">
                    <img src={coding} className="women-code-img"></img>
                </div>
                <div className="col">
                    <h2 className="about-heading text-start px-5">A bit about me</h2>
                    <p className="about text-start px-5">
                        HELLO! I’m Rukaiya Tahsin, a Frontend Developer
                        driven by a passion for crafting stunning, user-friendly, and engaging web experiences.
                        With a blend of creativity and clean design, I strive to bring fresh ideas to life and
                        make the web a more beautiful place.
                    </p>
                    <button type="button" className="btn rounded contact-btn">Contact Me</button>
                </div>
            </div>
        </>
    )
}