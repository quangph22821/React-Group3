import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
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

function App() {

  return <MessageProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/" element={<LayoutUser />}>
          <Route index element={<HomePage />} />
          <Route path="shoes/:id" element={<DetailPage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route path="home" element={<ListProducts />} />
          <Route path="addProduct" element={<CreateProducts />} />
          <Route path="category" element={<ListCategory />} />
          <Route path="addcategory" element={<CreateCategory />} />
          {/* <Route path="product/:id" element={<ProductUpdate />} />
          
          
          <Route path="update/:id" element={<CategoryUpdate />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </MessageProvider>
}

export default App
