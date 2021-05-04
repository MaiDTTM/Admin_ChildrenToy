import { combineReducers } from "redux";
import Slider from "./admin/slider/sliderReducer";
import Admin from "./admin/admin/adminReducer";
import UseAdmin from "./admin/admin/useAdminReducer";
import Catalog from "./admin/catalog/catalogReducer";
import Product from './admin/product/productReducer';
import User from './admin/user/loginUserReducer';
import Cart from './admin/cart/cartReducer';
import Customer from 'src/reducers/admin/customer/customerReducer';
const allReducers = combineReducers({
    Slider,
    Admin,
    Catalog,
    Product,
    UseAdmin,
    User,
    Cart,
    Customer,
});
export default allReducers;
