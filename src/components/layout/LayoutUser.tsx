import { Link, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"

const LayoutUser = () => {
    const { cartTotalQuantity } = useSelector((state: any) => state.cart)
    return <>
        {/* HEADER */}
        <nav className="navbar navbar-expand-lg navbar-light shadow">
            <div className="container d-flex justify-content-between align-items-center">
                <img src="../src/assets/img/logo.png" width={100} alt="" />
                <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#templatemo_main_nav"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div
                    className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
                    id="templatemo_main_nav"
                >
                    <div className="flex-fill">
                        <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/shop">
                                    Shop
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar align-self-center d-flex">
                        <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                            <div className="input-group">
                                <input
                                    type='text'
                                    placeholder='Search products'
                                    // value={searchQuery}
                                    // onChange={(e) => setSearchQuery(e.target.value)}
                                    className='block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                />
                                <div className="input-group-text">
                                    <i className="fa fa-fw fa-search" />
                                </div>
                            </div>
                            {/* <Search onSubmit={handleFiltersChange}/> */}
                        </div>
                        <a
                            className="nav-icon d-none d-lg-inline"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#templatemo_search"
                        >
                            <i className="fa fa-fw fa-search text-dark mr-2" />
                        </a>
                        <Link
                            className="nav-icon position-relative text-decoration-none"
                            to="/cart"
                        >
                            <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1" />
                            <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                                {cartTotalQuantity}
                            </span>
                        </Link>
                        <Link
                            className="nav-icon position-relative text-decoration-none"
                            to="/signup"
                        >
                            <i className="fa fa-fw fa-user text-dark mr-3" />
                            {/* <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                      +99
                  </span> */}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
        {/* Close Header */}
        {/* Modal */}
        <div
            className="modal fade bg-white"
            id="templatemo_search"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-lg" role="document">
                <div className="w-100 pt-1 mb-5 text-right">
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    />
                </div>
                <form
                    action=""
                    method="get"
                    className="modal-content modal-body border-0 p-0"
                >
                    <div className="input-group mb-2">
                        <input
                            type="text"
                            className="form-control"
                            id="inputModalSearch"
                            name="q"
                            placeholder="Search ..."
                        />
                        <button
                            type="submit"
                            className="input-group-text bg-success text-light"
                        >
                            <i className="fa fa-fw fa-search text-white" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
        {/* Start Banner Hero */}
        <div
            id="template-mo-zay-hero-carousel"
            className="carousel slide"
            data-bs-ride="carousel"
        >
            <ol className="carousel-indicators">
                <li
                    data-bs-target="#template-mo-zay-hero-carousel"
                    data-bs-slide-to={0}
                    className="active"
                />
                <li
                    data-bs-target="#template-mo-zay-hero-carousel"
                    data-bs-slide-to={1}
                />
                <li
                    data-bs-target="#template-mo-zay-hero-carousel"
                    data-bs-slide-to={2}
                />
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="container">
                        <div className="row p-5">
                            <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                <img
                                    className="img-fluid"
                                    src="../src/assets/img/banner_img_01.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="col-lg-6 mb-0 d-flex align-items-center">
                                <div className="text-align-left align-self-center">
                                    <h1 className="h1 text-success">
                                        <b>Zay</b> eCommerce
                                    </h1>
                                    <h3 className="h2">Tiny and Perfect eCommerce Template</h3>
                                    <p>
                                        Zay Shop is an eCommerce HTML5 CSS template with latest
                                        version of Bootstrap 5 (beta 1). This template is 100% free
                                        provided by{" "}
                                        <a
                                            rel="sponsored"
                                            className="text-success"
                                            href="https://templatemo.com"
                                            target="_blank"
                                        >
                                            TemplateMo
                                        </a>{" "}
                                        website. Image credits go to{" "}
                                        <a
                                            rel="sponsored"
                                            className="text-success"
                                            href="https://stories.freepik.com/"
                                            target="_blank"
                                        >
                                            Freepik Stories
                                        </a>
                                        ,
                                        <a
                                            rel="sponsored"
                                            className="text-success"
                                            href="https://unsplash.com/"
                                            target="_blank"
                                        >
                                            Unsplash
                                        </a>{" "}
                                        and
                                        <a
                                            rel="sponsored"
                                            className="text-success"
                                            href="https://icons8.com/"
                                            target="_blank"
                                        >
                                            Icons 8
                                        </a>
                                        .
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="container">
                        <div className="row p-5">
                            <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                <img
                                    className="img-fluid"
                                    src="../src/assets/img/banner_img_02.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="col-lg-6 mb-0 d-flex align-items-center">
                                <div className="text-align-left">
                                    <h1 className="h1">Proident occaecat</h1>
                                    <h3 className="h2">Aliquip ex ea commodo consequat</h3>
                                    <p>
                                        You are permitted to use this Zay CSS template for your
                                        commercial websites. You are <strong>not permitted</strong> to
                                        re-distribute the template ZIP file in any kind of template
                                        collection websites.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="container">
                        <div className="row p-5">
                            <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                <img
                                    className="img-fluid"
                                    src="../src/assets/img/banner_img_03.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="col-lg-6 mb-0 d-flex align-items-center">
                                <div className="text-align-left">
                                    <h1 className="h1">Repr in voluptate</h1>
                                    <h3 className="h2">Ullamco laboris nisi ut </h3>
                                    <p>
                                        We bring you 100% free CSS templates for your websites. If you
                                        wish to support TemplateMo, please make a small contribution
                                        via PayPal or tell your friends about our website. Thank you.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a
                className="carousel-control-prev text-decoration-none w-auto ps-3"
                href="#template-mo-zay-hero-carousel"
                role="button"
                data-bs-slide="prev"
            >
                <i className="fas fa-chevron-left" />
            </a>
            <a
                className="carousel-control-next text-decoration-none w-auto pe-3"
                href="#template-mo-zay-hero-carousel"
                role="button"
                data-bs-slide="next"
            >
                <i className="fas fa-chevron-right" />
            </a>
        </div>
        {/* End Banner Hero */}

        {/* END HEADER */}

        <Outlet />

        {/* FOOTTER */}

        <footer className="bg-dark" id="tempaltemo_footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 pt-5">
                        <h2 className="h2 text-success border-bottom pb-3 border-light logo">
                            Zay Shop
                        </h2>
                        <ul className="list-unstyled text-light footer-link-list">
                            <li>
                                <i className="fas fa-map-marker-alt fa-fw" />
                                123 Consectetur at ligula 10660
                            </li>
                            <li>
                                <i className="fa fa-phone fa-fw" />
                                <a className="text-decoration-none" href="tel:010-020-0340">
                                    010-020-0340
                                </a>
                            </li>
                            <li>
                                <i className="fa fa-envelope fa-fw" />
                                <a
                                    className="text-decoration-none"
                                    href="mailto:info@company.com"
                                >
                                    info@company.com
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 pt-5">
                        <h2 className="h2 text-light border-bottom pb-3 border-light">
                            Products
                        </h2>
                        <ul className="list-unstyled text-light footer-link-list">
                            <li>
                                <a className="text-decoration-none" href="#">
                                    Luxury
                                </a>
                            </li>
                            <li>
                                <a className="text-decoration-none" href="#">
                                    Sport Wear
                                </a>
                            </li>
                            <li>
                                <a className="text-decoration-none" href="#">
                                    Men's Shoes
                                </a>
                            </li>
                            <li>
                                <a className="text-decoration-none" href="#">
                                    Women's Shoes
                                </a>
                            </li>
                            <li>
                                <a className="text-decoration-none" href="#">
                                    Popular Dress
                                </a>
                            </li>
                            <li>
                                <a className="text-decoration-none" href="#">
                                    Gym Accessories
                                </a>
                            </li>
                            <li>
                                <a className="text-decoration-none" href="#">
                                    Sport Shoes
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 pt-5">
                        <h2 className="h2 text-light border-bottom pb-3 border-light">
                            Further Info
                        </h2>
                        <ul className="list-unstyled text-light footer-link-list">
                            <li>
                                <a className="text-decoration-none" href="#">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a className="text-decoration-none" href="#">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a className="text-decoration-none" href="#">
                                    Shop Locations
                                </a>
                            </li>
                            <li>
                                <a className="text-decoration-none" href="#">
                                    FAQs
                                </a>
                            </li>
                            <li>
                                <a className="text-decoration-none" href="#">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row text-light mb-4">
                    <div className="col-12 mb-3">
                        <div className="w-100 my-3 border-top border-light" />
                    </div>
                    <div className="col-auto me-auto">
                        <ul className="list-inline text-left footer-icons">
                            <li className="list-inline-item border border-light rounded-circle text-center">
                                <a
                                    className="text-light text-decoration-none"
                                    target="_blank"
                                    href="http://facebook.com/"
                                >
                                    <i className="fab fa-facebook-f fa-lg fa-fw" />
                                </a>
                            </li>
                            <li className="list-inline-item border border-light rounded-circle text-center">
                                <a
                                    className="text-light text-decoration-none"
                                    target="_blank"
                                    href="https://www.instagram.com/"
                                >
                                    <i className="fab fa-instagram fa-lg fa-fw" />
                                </a>
                            </li>
                            <li className="list-inline-item border border-light rounded-circle text-center">
                                <a
                                    className="text-light text-decoration-none"
                                    target="_blank"
                                    href="https://twitter.com/"
                                >
                                    <i className="fab fa-twitter fa-lg fa-fw" />
                                </a>
                            </li>
                            <li className="list-inline-item border border-light rounded-circle text-center">
                                <a
                                    className="text-light text-decoration-none"
                                    target="_blank"
                                    href="https://www.linkedin.com/"
                                >
                                    <i className="fab fa-linkedin fa-lg fa-fw" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-auto">
                        <label className="sr-only" htmlFor="subscribeEmail">
                            Email address
                        </label>
                        <div className="input-group mb-2">
                            <input
                                type="text"
                                className="form-control bg-dark border-light"
                                id="subscribeEmail"
                                placeholder="Email address"
                            />
                            <div className="input-group-text btn-success text-light">
                                Subscribe
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-100 bg-black py-3">
                <div className="container">
                    <div className="row pt-2">
                        <div className="col-12">
                            <p className="text-left text-light">
                                Copyright © 2021 Company Name | Designed by{" "}
                                <a rel="sponsored" href="https://templatemo.com" target="_blank">
                                    TemplateMo
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
}

export default LayoutUser
