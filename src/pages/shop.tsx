import { useContext, useEffect, useState } from "react"
import { ICategory, IProduct } from "../models"
import { ListCategory } from "../components/categoryList"
import ProductList from "../components/productList"
import { fetchShoes } from "./shoes/shoes.reducer"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store"
import { MessageContext } from "../context/message-context"
import { fetchCate } from "./shoes/category.reducer"


const Shop = () => {
    const { shoess, isLoading } = useSelector((state: RootState) => state.shoess)
    const { category } = useSelector((state: RootState) => state.category)
    const dispatch = useDispatch<AppDispatch>()
    const { setMessage } = useContext(MessageContext)
    useEffect(() => {
        const getShoes = async () => {
            try {
                await dispatch(fetchShoes()).unwrap()

            } catch (error) {
                setMessage({
                    type: 'error',
                    message: error
                })
                console.log(error);

            }
        }
        const getAllCategory = async () => {
            try {
                await dispatch(fetchCate()).unwrap()

            } catch (error) {
                setMessage({
                    type: 'error',
                    message: error
                })
                console.log(error);

            }
        }
        getShoes(),
        getAllCategory()
    }, [])
    return <>
        {/* Start Content */}
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-3">
                    <h1 className="h2 pb-4">Categories</h1>
                    <ul className="list-unstyled templatemo-accordion">
                        {category.map((item: ICategory) => <ListCategory data={item} key={item._id} />)}
                    </ul>
                </div>
                <div className="col-lg-9">
                    <div className="row">
                        {shoess.map((item: IProduct) => <ProductList data={item} key={item._id} />)}
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

export default Shop