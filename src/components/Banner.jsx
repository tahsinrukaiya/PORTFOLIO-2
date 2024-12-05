import myImage from "../assets/me.JPG"

const Banner = () => {
    return (
        <>
            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="heading-one text-start">Welcome</h2>
                            <p className="description text-start">
                                HELLO!
                                I am Rukaiya Tahsin, studying Front-end development at
                                Noroff School of Technology and Digital Media.
                                I am learning visual, experiental and functional
                                aspects of creating for web. Through my learning
                                I want to acheive more beauty, creativity,
                                and good ideas into the world through web design.
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
