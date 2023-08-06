import { useParams, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useDetailProductQuery } from "../service/products.service"
import { addToCart } from "../service/cart.service"


const DetailPage = (props: any) => {
  const _id = useParams().id
  const { data } = useDetailProductQuery(_id)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const colorList = data?.data?.color
  console.log(data?.data?.category_Id.name);

  // const categoryList = data?.data?.category_Id
  // console.log(categoryList);

  const sizeList = data?.data?.size

  const handleAddToCart = (data: any) => {
    dispatch(addToCart(data))
    navigate("/cart")
  }

  return <>
    <section className="bg-light">
      <div className="container pb-5">
        <div className="row">
          <div className="col-lg-5 mt-5">
            <div className="card mb-3">
              <img
                className="card-img img-fluid"
                src={data?.data?.image}
                alt="Card image cap"
                id="product-detail"
              />
            </div>
          </div>
          {/* col end */}
          <div className="col-lg-7 mt-5">
            <div className="card">
              <div className="card-body">
                <h1 className="h2">{data?.data?.name}</h1>
                <p className="h3 py-2">Giá: {data?.data?.price}.000 VND</p>
                <p className="py-2">
                  <i className="fa fa-star text-warning" />
                  <i className="fa fa-star text-warning" />
                  <i className="fa fa-star text-warning" />
                  <i className="fa fa-star text-warning" />
                  <i className="fa fa-star text-secondary" />
                  <span className="list-inline-item text-dark">
                    Rating 4.8 | 36 Comments
                  </span>
                </p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <h6>Brand:</h6>
                  </li>
                  <li className="list-inline-item">
                    <p className="text-muted">
                      <strong>
                        {data?.data?.category_Id.name}
                      </strong>
                    </p>
                  </li>
                </ul>
                <h6>Description:</h6>
                <p>
                  {data?.data?.description}
                </p>
                <ul className="list-inline mb-2">
                  <li className="list-inline-item">
                    Avaliable Color :
                    <select
                      id="HeadlineAct"
                      className="border mx-3"
                    >
                      {colorList && colorList?.map((item: any) => {
                        return (
                          <option value={item._id}>{item.name}</option>
                        )
                      })}
                    </select>
                  </li>
                </ul>
                <input
                  type="hidden"
                  name="product-title"
                  defaultValue="Activewear"
                />
                <div className="row">
                  <div className="col-auto">
                    <ul className="list-inline pb-3">
                      <li className="list-inline-item">
                        Size :
                        <select
                          id="HeadlineAct"
                          className="border mx-3"
                        >
                          {sizeList && sizeList?.map((item: any) => {
                            return (
                              <option value={item._id}>{item.name}</option>
                            )
                          })}
                        </select>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row pb-3">
                  <div className="col d-grid">
                    <button className="btn btn-success btn-lg" onClick={() => { handleAddToCart(data.data) }}>Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </section >

  </>
}

export default DetailPage
