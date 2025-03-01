// import { padding } from "@mui/system";

const ProductsPage = () => {
    return <div className="container mt-5 bg-warning">
        <div className="row">
            <div className="col-12">
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="Images/Cow.jpg" className="d-block w-100" style={{height: '380px'}} alt="Horse" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="Images/Cow.jpg" className="d-block w-100" alt="Cow" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="Images/Lion.jpg" className="d-block w-100" alt="Lion" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
                {/* <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src="Images/Cow.jpg" className="d-block w-100" alt="Cow" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src="Images/Horse.jpg" className="d-block w-100" alt="Horse" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src="Images/Lion.jpg" className="d-block w-100" alt="Lion" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div> */}
            </div>
            {/* <div className="bg-success" style={{width: '99%', marginLeft: '2px'}}> */}
                <div className="row mt-1 w-100 d-flex">
                    {/* <div className="col-3">
                        <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top" src="Images/Cow.jpg" alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text rd's content.</p>
                                <div className="d-flex justify-content-end">
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className='col-4'>
                        <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top" src="Images/Lion.jpg"  height={'190px'}  alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text rd's content.</p>
                                <div className="d-flex justify-content-end">
                                    <a href="/abc" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top" src="Images/Horse.jpg" height={'190px'} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text rd's content.</p>
                                <div className="d-flex justify-content-end">
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top" src="Images/Buffailo.jpg" alt={'Card image cap'}/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text rd's content.</p>
                                <div className="d-flex justify-content-end">
                                    <a href="/zbf" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}
            <div className="col-12 bg-primary">
                <div className="row">
                    <div className="col-9 bg-danger"  style={{height:'150px'}}>
                        <h2>First party</h2>
                    </div>
                    <div className="col-3 bg-secondary" style={{height:'150px'}}>
                            <h4>Third party</h4>
                    </div>

                </div>
            </div>
            <div className="col-12 bg-warning">
                <h6 className="text-white">About us</h6>
            </div>

        </div>
        
    </div>
}

export default ProductsPage;