export default function Cards() {
    return (
        <>
            <div className="card-container mx-5 mt-5 mb-5">
                <div className="row">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}