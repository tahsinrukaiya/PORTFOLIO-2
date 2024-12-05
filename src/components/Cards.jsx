export default function Cards() {
    return (
        <>
            <div className="row card-container mx-3 mt-5 mb-5">
                <h2 className="text-center mb-5 mt-5">My Projects</h2>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                        <img src="/src/assets/auction-house.JPG" className="card-img-top" alt="..."></img>
                        <h5 className="card-title px-3 mt-3">Auction House</h5>
                        <p className="project-detail px-3">
                            A dynamic online platform where users can engage in buying and selling activities through an intuitive auction system.
                            This website provides a seamless and interactive experience for users to view, create, and bid on listings.
                            Each user has a personalized profile showcasing their credits, wins, and listings, enhancing their auction experience.
                        </p>
                        <div className="overlay">
                            <h5 className="card-title px-3">Auction House</h5>
                            <div className="links mt-3 d-flex">
                                <h6>Github Link
                                    <a
                                        href="https://github.com/tahsinrukaiya/SEMESTER-PROJECT-2"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fa-brands fa-github px-5 mt-2"></i>
                                    </a></h6>
                                <h6>Live Site
                                    <a href="https://idyllic-pegasus-559e57.netlify.app" target="_blank"
                                        rel="noopener noreferrer"><i className="fa-solid fa-link  px-5 mt-2"></i></a></h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                        <img src="/src/assets/eCom.JPG" className="card-img-top" alt="..."></img>
                        <h5 className="card-title px-3 mt-3">E-Commerce Shop</h5>
                        <p className="project-detail px-3">
                            An Online Shop, a modern, responsive eCommerce application powered
                            by React! This project brings together dynamic UI/UX design, seamless API integration, and intuitive navigation to deliver a delightful shopping experience.
                        </p>
                        <div className="overlay">
                            <h5 className="card-title px-3">E-Commerce Shop</h5>
                            <div className="links mt-3 d-flex">
                                <h6>Github Link
                                    <a
                                        href="https://github.com/tahsinrukaiya/eCom-website"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fa-brands fa-github px-5 mt-2"></i>
                                    </a></h6>
                                <h6>Live Site
                                    <a href="https://ecomwebbyruk.netlify.app" target="_blank"
                                        rel="noopener noreferrer"><i className="fa-solid fa-link  px-5 mt-2"></i></a></h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                        <img src="/src/assets/holidaze.JPG" className="card-img-top" alt="..."></img>
                        <h5 className="card-title px-3 mt-3">Holidayz Booking</h5>
                        <p className="project-detail px-3">An application designed for seamless accommodation booking experiences.
                            This project showcases both customer-facing and admin-facing functionalities,
                            catering to users who want to book holidays and venue managers who oversee
                            accommodations.</p>
                        <div className="overlay">
                            <h5 className="card-title px-3">Holidayz Booking</h5>
                            <div className="links mt-3 d-flex">
                                <h6>Github Link
                                    <a
                                        href="https://github.com/tahsinrukaiya/PROJECT-EXAM-2"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fa-brands fa-github px-5 mt-2"></i>
                                    </a></h6>
                                <h6>Live Site
                                    <a href="https://holidayzruk.netlify.app" target="_blank"
                                        rel="noopener noreferrer"><i className="fa-solid fa-link  px-5 mt-2"></i></a></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}