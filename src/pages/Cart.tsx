import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from "../service/cart.service"
import { useEffect } from "react"

const CartPage = () => {
    const cart = useSelector((state: any) => state.cart)
    const dispath = useDispatch()
    
    useEffect(() => {
        dispath(getTotals())
    }, [cart, dispath])

    const handleRemoveFromCart = (cartItem: any) => {
        dispath(removeFromCart(cartItem))
    }

    const handleIncreaseCart = (cartItem: any) => {
        dispath(addToCart(cartItem))
    }

    const handleDecreaseCart = (cartItem: any) => {
        dispath(decreaseCart(cartItem))
    }

    const handleClearCart = () => {
        dispath(clearCart())
    }

    return (<div className="cart-container">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
            <div className="cart-empty">
                <p>Your cart is currently empty </p>
                <div className="start-shopping">
                    <Link to="/">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-arrow-left-short"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                        </svg>
                        <span>Start Shopping</span>
                    </Link>
                </div>
            </div>
        ) : (
            <div>
                <div className="cart-items">
                    {cart.cartItems?.map((cartItem: any) => (
                        <div className="cart-item" key={cartItem._id}>
                            <div className="cart-product">
                                <img src={cartItem.image} alt={cartItem.name} />
                                <div>
                                    <h3>{cartItem.name}</h3>
                                    <h3>{cartItem.description}</h3>
                                    <button onClick={() => handleRemoveFromCart(cartItem)}>Remove</button>
                                </div>
                            </div>
                            <div className="cart-product-price">{cartItem.price}.000 VND</div>
                            <div className="cart-product-quantity">
                                <button onClick={() => handleDecreaseCart(cartItem)}>-</button>
                                <div className="count">{cartItem.cartQuantity}</div>
                                <button onClick={() => handleIncreaseCart(cartItem)}>+</button>
                            </div>
                            <div className="cart-product-total-price">
                                {cartItem.price * cartItem.cartQuantity}.000 VND
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cart-summary">
                    <button className="clear-cart" onClick={() => handleClearCart()} >Clear Cart</button>
                    <div className="cart-checkout">
                        <div className="subtotal">
                            <span>Subtotal</span>
                            <span className="amount">{cart.cartTotalAmout}.000 VND</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <Link to="/pay" className="btn btn-primary">Thanh toán</Link>
                        <div className="start-shopping">
                            <Link to="/">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    className="bi bi-arrow-left-short"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                                </svg>
                                <span>Continue Shopping</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
    )
}

export default CartPage
