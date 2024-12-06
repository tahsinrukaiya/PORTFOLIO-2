import myImage from "../assets/me.JPG"

const Banner = () => {
    return (
        <>
            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="heading-one text-start">Welcome</h2>
                            <span className="slogan"> Crafting User-Centered Designs with Clean Code</span><br />
                            <h6 className="about-me text-start mt-3">A bit about me</h6>
                            <p className="description text-start mt-3">
                                HELLO! I’m Rukaiya Tahsin, a Frontend Developer
                                driven by a passion for crafting stunning, user-friendly, and engaging web experiences.
                                With a blend of creativity and clean design, I strive to bring fresh ideas to life and
                                make the web a more beautiful place.
                            </p>
                            <div className="text-start"><i className="icon fa-brands fa-github me-3"></i>
                                <i className="icon fa-brands fa-linkedin"></i></div>
                        </div>
                        <div className="col">
                            <div className="banner-img-container"><img src={myImage} className="banner-img rounded-circle"></img></div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Banner;
