import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from "react-toastify"
import "react-toastify/ReactToastify.css"
import SignupPage from './pages/Signup'
import SigninPage from './pages/Signin'
import MessageProvider from './context/message-context'
import HomePage from './pages/Home'
import DetailPage from './pages/Detail'
import ShopPage from './pages/Shop'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import LayoutUser from './components/layout/LayoutUser'
import ListProducts from './pages/admin/products/ListProducts'
import LayoutAdmin from './components/layout/LayoutAdmin'
import ListCategory from './pages/admin/category/ListCategory'
import CreateCategory from './pages/admin/category/CreateCategory'
import CreateProducts from './pages/admin/products/CreateProduct'
import CartPage from './pages/Cart'
import PayPage from './pages/Pay'
import UpdateCategory from './pages/admin/category/updateCategory'
import UpdateProduct from './pages/admin/products/UpdateProduct'

function App() {

  return <MessageProvider>
    <BrowserRouter>
    <ToastContainer/>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/" element={<LayoutUser />}>
          <Route index element={<HomePage />} />
          <Route path="shoes/:id" element={<DetailPage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="pay" element={<PayPage />} />
        </Route>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route path="home" element={<ListProducts />} />
          <Route path="addProduct" element={<CreateProducts />} />
          <Route path="category" element={<ListCategory />} />
          <Route path="addcategory" element={<CreateCategory />} />
          <Route path="editCate/:id" element={<UpdateCategory />} />
          <Route path="product/:id" element={<UpdateProduct />} />
          
          
        </Route>
      </Routes>
    </BrowserRouter>
  </MessageProvider>
}

export default App
