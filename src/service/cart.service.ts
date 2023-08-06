import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"

const initialState = {
    cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
    cartTotalQuantity: 0,
    cartTotalAmout: 0,
    products: []
};


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        // TÌM KIẾM SẢN PHẨM
        // filterProducts: (state, action) =>{
        //     state.products = state.products.filter(product => product.name.toLowerCase().includes(action.payload));
        // },

        // THÊM VÀO GIỎ HÀNG
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (item: any) => item._id === action.payload._id
            )
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1
                toast.info(`Sản phẩm ${state.cartItems[itemIndex].name} tăng thêm số lượng`, {
                    position: "bottom-left",

                })
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProduct)
                toast.success(`${action.payload.name} đã được thêm vào giỏ hàng`, {
                    position: "bottom-left",

                })
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },

        // XÓA SẢN PHẨM TRONG GIỎ HÀNG
        removeFromCart(state, action) {
            const nextCartItem = state.cartItems.filter(
                (cartItem: any) => cartItem._id !== action.payload._id
            );

            state.cartItems = nextCartItem
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            toast.error(`${action.payload.name} đã được xóa khỏi giỏ hàng`, {
                position: "bottom-left",

            })
        },

        // TĂNG SỐ LƯỢNG TRONG GIỎ HÀNG
        decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (cartItem: any) => cartItem._id === action.payload._id
            )
            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1

                toast.error(`${action.payload.name} đã được xóa khỏi giỏ hàng`, {
                    position: "bottom-left",

                })
            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const nextCartItem = state.cartItems.filter(
                    (cartItem: any) => cartItem._id !== action.payload._id
                );

                state.cartItems = nextCartItem

                toast.error(`${action.payload.name} đã được xóa khỏi giỏ hàng`, {
                    position: "bottom-left",

                })
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },

        // XÓA TẤT CẢ GIỎ HÀNG
        clearCart(state, action) {
            state.cartItems = []
            toast.error(`Tất cả sản phẩm đã được xóa khỏi giỏ hàng`, {
                position: "bottom-left",

            })
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        getTotals(state, action) {
            let { total, quantity } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const { price, cartQuantity } = cartItem;
                    const itemTotal = price * cartQuantity;

                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQuantity;

                    return cartTotal;
                },
                {
                    total: 0,
                    quantity: 0,
                }
            );
            state.cartTotalQuantity = quantity;
            state.cartTotalAmout = total;
        }

    }
})

export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotals } = cartSlice.actions
export default cartSlice.reducer