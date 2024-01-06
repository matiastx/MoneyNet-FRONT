import { Routes as ReactDomRoutes, Route } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Productos from '../Pages/Products/Products'
import About from '../Pages/About/AboutUs'
import Login from '../Pages/Login/Login'
import Register from '../Pages/Register/Register'
import OrderDetails from '../Pages/OrderDetails/OrderDetails'
import MyOrders from '../Pages/MyOrders/MyOrders'
import VerfyUser from '../Pages/VerfyUser/VerfyUser'

const Routes = () => {
    return (
        <ReactDomRoutes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<Productos />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/orderdetails" element={<OrderDetails />} />
            <Route path="/myorders" element={<MyOrders />} />
            <Route path="/verifyuser" element={<VerfyUser />} />
            <Route path="*" element={<Home />} />
        </ReactDomRoutes>

    )
}

export default Routes