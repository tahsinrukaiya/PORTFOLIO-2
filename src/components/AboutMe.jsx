import { useState } from "react";
import coding from "../assets/coding.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function AboutMe() {
    const [showModal, setShowModal] = useState(false);

    const handleModalOpen = () => setShowModal(true);
    const handleModalClose = () => setShowModal(false);

    return (
        <>
            <div className="row justify-content-center align-items-center text-center mx-5 about-me-container">
                <div className="col">
                    <img src={coding} className="women-code-img" alt="Coding"></img>
                </div>
                <div className="col">
                    <h2 className="about-heading text-start px-5">A bit about me</h2>
                    <p className="about text-start px-5">
                        HELLO! I’m Rukaiya Tahsin, a Frontend Developer
                        driven by a passion for crafting stunning, user-friendly, and engaging web experiences.
                        With a blend of creativity and clean design, I strive to bring fresh ideas to life and
                        make the web a more beautiful place.
                    </p>
                    <div className="btn-container text-start mx-5">
                        <button
                            type="button"
                            className="btn rounded contact-btn pt-2 pb-2 px-3"
                            onClick={handleModalOpen}
                        >
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>

            {showModal && (
                <div
                    className="modal fade show"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    Contact Me
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={handleModalClose}
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <p>
                                    If you would like to collaborate, have questions, or just want to connect, feel free to reach out!
                                </p>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="nameInput" className="form-label">Your Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="nameInput"
                                            placeholder="Enter your name"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="emailInput" className="form-label">Email address</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="emailInput"
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="messageInput" className="form-label">Your Message</label>
                                        <textarea
                                            className="form-control"
                                            id="messageInput"
                                            rows="3"
                                            placeholder="Write your message here"
                                            required
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="btn send-btn">Send Message</button>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn close-btn"
                                    onClick={handleModalClose}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
