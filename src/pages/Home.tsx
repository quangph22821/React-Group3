import { Link } from "react-router-dom"
import { useLimitProductsQuery } from "../service/products.service"
// import { useLimitCategoryQuery } from "../service/category.service"


const HomePage = () => {
  const { data } = useLimitProductsQuery()
  // const { data } = useLimitCategoryQuery()
  return <>
    {/* Start Categories of The Month */}
    <section className="container py-5">
      <div className="row text-center pt-3">
        <div className="col-lg-6 m-auto">
          <h1 className="h1">Categories of The Month</h1>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="row">
        {/* {data?.data?.map((item: any) =>
          <div className="col-12 col-md-4 p-5 mt-3">
            <Link to="#">
              <img
                src={item.image}
                className="rounded-circle img-fluid border "
              />
            </Link>
            <h5 className="text-center mt-3 mb-3">{item.name}</h5>
            <p className="text-center">
              <Link to="" className="btn btn-success">Go Shop</Link>
            </p>
          </div>
        )} */}
      </div>
    </section>
    {/* End Categories of The Month */}
    {/* Start Featured Product */}
    <section className="bg-light">
      <div className="container py-5">
        <div className="row text-center py-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">Featured Product</h1>
            <p>
              Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>
        </div>
        <div className="row">
          {data?.data?.map((item: any) =>
            <div className="col-12 col-md-4 mb-4">
              <div className="card h-100">
                <Link to={`/shoes/${item._id}`}>
                  <img src={item.image} className="card-img-top" alt="..." />
                </Link>
                <div className="card-body">
                  <ul className="list-unstyled d-flex justify-content-between">
                    <li>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                    </li>
                    <li className="text-muted text-right">{item.price}</li>
                  </ul>
                  <a href="shop-single.html" className="h2 text-decoration-none text-dark">{item.name}</a>
                  <p className="card-text">
                    {item.description}
                  </p>
                  <p className="text-muted">Reviews (24)</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
    {/* End Featured Product */}
  </>
}

export default HomePage
