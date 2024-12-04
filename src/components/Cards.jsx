export default function Cards() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        Card-1
                        <div className="card">
                            <img src="/src/assets/auction-house.JPG" className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        Card-2
                        <div className="card">
                            <img src="/src/assets/eCom.JPG" className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        Card-3
                        <div className="card">
                            <img src="/src/assets/holidaze.JPG" className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}