const ProductsPage = () => {
    return <div className="container mt-1 bg-light">
        <div className="row w-100 d-flex">
            <div className='col-4'>
                <div className="card" style={{width: "18rem"}}>
                    <img className="card-img-top" src="Images/Lion.jpg"  height={'190px'}  alt="Card cap"/>
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
                    <img className="card-img-top" src="Images/Horse.jpg" height={'190px'} alt="Card cap"/>
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
                    <img className="card-img-top" src="Images/Buffailo.jpg" alt={'Card cap'}/>
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
    </div>
}

export default ProductsPage;