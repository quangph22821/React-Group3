
import { Link } from "react-router-dom";
import { useFetchProductsQuery } from "../service/products.service"


const ShopPage = () => {
    const { data } = useFetchProductsQuery()

    return <>
        {/* Start Content */}
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-3">
                    <h1 className="h2 pb-4">Categories</h1>
                    <ul className="list-unstyled templatemo-accordion">
                        {/* {category.map((item: ICategory) => <ListCategory data={item} key={item._id} />)} */}
                    </ul>
                </div>
                <div className="col-lg-9">
                    <div className="row">
                        <div className="col-md-6">
                            <input
                                type="text"
                                name=""
                                placeholder="Tìm kiếm"

                            />
                        </div>
                        <div className="col-md-6 pb-4">
                            <div className="d-flex">
                                <select className="form-control">
                                    <option>Featured</option>
                                    <option>A to Z</option>
                                    <option>Item</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {data?.data?.map((item: any) =>
                            <div className="col-md-4">
                                <div className="card mb-4 product-wap rounded-0">
                                    <div className="card rounded-0">
                                        <img className="card-img rounded-0 img-fluid" src={item.image} />
                                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                            <ul className="list-unstyled">
                                                <li><Link className="btn btn-success text-white" to={`/shoes/${item._id}`}><i className="far fa-heart"></i></Link></li>
                                                <li><Link className="btn btn-success text-white mt-2" to={`/shoes/${item._id}`}><i className="far fa-eye"></i></Link></li>
                                                <li><Link className="btn btn-success text-white mt-2" to={`/shoes/${item._id}`}><i className="fas fa-cart-plus"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <Link to={`/shoes/${item._id}`} className="h3 text-decoration-none">{item.name}</Link>
                                        <ul className="list-unstyled d-flex justify-content-center mb-1">
                                            <li>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-muted fa fa-star"></i>
                                                <i className="text-muted fa fa-star"></i>
                                            </li>
                                        </ul>
                                        <p className="text-center mb-0">{item.price}.000 VND</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
        {/* End Content */}
        {/* Start Brands */}
        <section className="bg-light py-5">
            <div className="container my-4">
                <div className="row text-center py-3">
                    <div className="col-lg-6 m-auto">
                        <h1 className="h1">Our Brands</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                    <div className="col-lg-9 m-auto tempaltemo-carousel">
                        <div className="row d-flex flex-row">
                            {/*Controls*/}
                            <div className="col-1 align-self-center">
                                <a
                                    className="h1"
                                    href="#multi-item-example"
                                    role="button"
                                    data-bs-slide="prev"
                                >
                                    <i className="text-light fas fa-chevron-left" />
                                </a>
                            </div>
                            {/*End Controls*/}
                            {/*Carousel Wrapper*/}
                            <div className="col">
                                <div
                                    className="carousel slide carousel-multi-item pt-2 pt-md-0"
                                    id="multi-item-example"
                                    data-bs-ride="carousel"
                                >
                                    {/*Slides*/}
                                    <div
                                        className="carousel-inner product-links-wap"
                                        role="listbox"
                                    >
                                        {/*First slide*/}
                                        <div className="carousel-item active">
                                            <div className="row">
                                                <div className="col-3 p-md-5">
                                                    <a href="#">
                                                        <img
                                                            className="img-fluid brand-img"
                                                            src="../src/assets/img/brand_01.png"
                                                            alt="Brand Logo"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col-3 p-md-5">
                                                    <a href="#">
                                                        <img
                                                            className="img-fluid brand-img"
                                                            src="../src/assets/img/brand_02.png"
                                                            alt="Brand Logo"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col-3 p-md-5">
                                                    <a href="#">
                                                        <img
                                                            className="img-fluid brand-img"
                                                            src="../src/assets/img/brand_03.png"
                                                            alt="Brand Logo"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col-3 p-md-5">
                                                    <a href="#">
                                                        <img
                                                            className="img-fluid brand-img"
                                                            src="../src/assets/img/brand_04.png"
                                                            alt="Brand Logo"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/*End First slide*/}
                                        {/*Second slide*/}
                                        <div className="carousel-item">
                                            <div className="row">
                                                <div className="col-3 p-md-5">
                                                    <a href="#">
                                                        <img
                                                            className="img-fluid brand-img"
                                                            src="../src/assets/img/brand_01.png"
                                                            alt="Brand Logo"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col-3 p-md-5">
                                                    <a href="#">
                                                        <img
                                                            className="img-fluid brand-img"
                                                            src="../src/assets/img/brand_02.png"
                                                            alt="Brand Logo"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col-3 p-md-5">
                                                    <a href="#">
                                                        <img
                                                            className="img-fluid brand-img"
                                                            src="../src/assets/img/brand_03.png"
                                                            alt="Brand Logo"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col-3 p-md-5">
                                                    <a href="#">
                                                        <img
                                                            className="img-fluid brand-img"
                                                            src="../src/assets/img/brand_04.png"
                                                            alt="Brand Logo"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/*End Second slide*/}
                                        {/*Third slide*/}
                                        <div className="carousel-item">
                                            <div className="row">
                                                <div className="col-3 p-md-5">
                                                    <a href="#">
                                                        <img
                                                            className="img-fluid brand-img"
                                                            src="../src/assets/img/brand_01.png"
                                                            alt="Brand Logo"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col-3 p-md-5">
                                                    <a href="#">
                                                        <img
                                                            className="img-fluid brand-img"
                                                            src="../src/assets/img/brand_02.png"
                                                            alt="Brand Logo"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col-3 p-md-5">
                                                    <a href="#">
                                                        <img
                                                            className="img-fluid brand-img"
                                                            src="../src/assets/img/brand_03.png"
                                                            alt="Brand Logo"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col-3 p-md-5">
                                                    <a href="#">
                                                        <img
                                                            className="img-fluid brand-img"
                                                            src="../src/assets/img/brand_04.png"
                                                            alt="Brand Logo"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/*End Third slide*/}
                                    </div>
                                    {/*End Slides*/}
                                </div>
                            </div>
                            {/*End Carousel Wrapper*/}
                            {/*Controls*/}
                            <div className="col-1 align-self-center">
                                <a
                                    className="h1"
                                    href="#multi-item-example"
                                    role="button"
                                    data-bs-slide="next"
                                >
                                    <i className="text-light fas fa-chevron-right" />
                                </a>
                            </div>
                            {/*End Controls*/}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*End Brands*/}

    </>
}

export default ShopPage
