import myImage from "../assets/me.JPG"

const Banner = () => {
    return (
        <>
            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h3 className="logo mt-3 text-start">Rukaiya Tahsin</h3>
                            <div className="banner-img-container"><img src={myImage} className="banner-img rounded-circle"></img></div>
                        </div>
                        <div className="col">
                            <h2 className="heading-one text-start mt-5">Transforming Ideas into Interactive Experiences</h2>
                            <span className="slogan text-start"> Crafting User-Centered Designs with Clean Code</span><br />

                            <p className="intro-name text-start">Rukaiya Tahsin || Frontend Developer</p>
                            <div className="text-start">
                                <a href="https://github.com/tahsinrukaiya"><i className="icon fa-brands fa-github me-3 mt-3"></i></a>
                                <a href="https://www.linkedin.com/in/rukaiya-tahsin/"><i className="icon fa-brands fa-linkedin"></i></a></div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Banner;
