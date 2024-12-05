export default function Skills() {
    return (
        <>
            <div className="row skill-container justify-content-center align-items-center text-center mx-5">
                <div className="col">
                    <h3 className="heading-2 mt-5 mb-5">Skills</h3>
                    <ul className="skills-list list-unstyled d-flex justify-content-center align-item-center">
                        <li className="skill-item me-3 border pt-3 pb-3 px-3 rounded">HTML<i className="fa-brands fa-html5 mx-2"></i></li>
                        <li className="skill-item me-3 border pt-3 pb-3 px-3 rounded">CSS<i className="fa-brands fa-css mx-2"></i></li>
                        <li className="skill-item me-3 border pt-3 pb-3 px-3 rounded">JS<i className="fa-brands fa-js mx-2"></i></li>
                        <li className="skill-item me-3 border pt-3 pb-3 px-3 rounded">React<i className="fa-brands fa-react mx-2"></i></li>
                        <li className="skill-item me-3 border pt-3 pb-3 px-3 rounded">Bootstrap <i className="fa-brands fa-bootstrap mx-2"></i></li>
                        <li className="skill-item me-3 border pt-3 pb-3 px-3 rounded">Figma<i className="fa-brands fa-figma mx-2"></i></li>
                    </ul>
                </div>
            </div>
        </>
    )
}