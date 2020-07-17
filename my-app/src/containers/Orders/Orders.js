import React, { useEffect } from "react";
import axios from "../../axios-orders";
import { connect } from "react-redux";

import Order from "../../components/Order/Order";
import withErrroHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store/actions/index";
import Spinner from "../../components/UI/Spinner/Spinner";

const Orders = (props) => {
    const { token, userId, onFetchOrders } = props;

    useEffect(() => {
        onFetchOrders(token, userId);
    }, [token, userId, onFetchOrders]);

    let orders = <Spinner />;
    if (!props.loading) {
        orders = props.orders.map((order) => (
            <Order ingredients={order.ingredients} price={+order.price} key={order.id} />
        ));
    }
    return <div>{orders}</div>;
};

const mapStateToProps = (state) => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(userId, token)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withErrroHandler(Orders, axios));
