import axios from "axios";
import { createOrderFail, fetchOrdersFail, fetchOrdersStart, fetchOrdersSuccess } from "../redux/orders/ordersSlice";

import {BASE_URL} from "../Utils/constantes"

export const getOrders = async (dispatch, userToken) => {

    dispatch(fetchOrdersStart())

    console.log(userToken);

    try {
        const orders = await axios.get(`${BASE_URL}orders`, {
            headers: {
                'x-token': userToken
            }
        })
        if (orders) {
            dispatch(fetchOrdersSuccess(orders.data.data))
        }
    } catch (error) {
        console.log(error);
        dispatch(fetchOrdersFail("Todavia no estas logueado, por tanto no hay ordenes para mostrarte"))
    }
}

export const createOrder = async (OrderData, dispatch, userToken) => {
    try {
        await axios.post(`${BASE_URL}orders`, OrderData, {
            headers: {
                'x-token': userToken
            }
        })
    } catch (error) {
        console.log(error);
        dispatch(createOrderFail(error.response.data.message))
        }
    }
