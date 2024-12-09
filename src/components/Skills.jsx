import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import bootstrap from "../assets/bootstrap.png";
import react from "../assets/react.png";
import figma from "../assets/figma.png";

export default function Skills() {
    return (
        <>
            <div className="row skill-container justify-content-center align-items-center text-center mx-5 pb-5 mt-5 mb-5">
                <div className="col">
                    <h3 className="skill-heading mt-5 mb-5">Skills</h3>
                    <ul className="skills-list list-unstyled d-flex justify-content-center align-item-center">
                        <li className="skill-item me-3 border pt-3 pb-3 px-3 rounded">HTML <img src={html} className="skill-icon mx-2"></img></li>
                        <li className="skill-item me-3 border pt-3 pb-3 px-3 rounded">CSS<img src={css} className="skill-icon mx-2"></img></li>
                        <li className="skill-item me-3 border pt-3 pb-3 px-3 rounded">JS<img src={js} className="skill-icon mx-2"></img></li>
                        <li className="skill-item me-3 border pt-3 pb-3 px-3 rounded">React<img src={bootstrap} className="skill-icon mx-2"></img></li>
                        <li className="skill-item me-3 border pt-3 pb-3 px-3 rounded">Bootstrap <img src={react} className="skill-icon mx-2"></img></li>
                        <li className="skill-item me-3 border pt-3 pb-3 px-3 rounded">Figma<img src={figma} className="skill-icon mx-2"></img></li>
                    </ul>
                </div>
            </div>
        </>
    )
}