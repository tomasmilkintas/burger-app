import React, { Component } from "react";
import axios from "../../../axios-orders";

import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.css";
import Spinner from "../../../components/UI/Spinner/Spinner";

class ContactData extends Component {
    state = {
        name: "",
        email: "",
        address: {
            street: "",
            postalCode: "",
        },
        loading: false,
    };

    orderHandler = (event) => {
        event.preventDefault();
        // alert("Go forth, you hungry adventurer!");
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: "Tomas M",
                address: {
                    street: "Teststreet 123",
                    postCode: "SE1",
                    country: "UK",
                },
                email: "test@test.com",
            },
            deliveryMethod: "fastest",
        };
        axios
            .post("/orders.json", order)
            .then((response) => {
                this.setState({ loading: false });
                this.props.history.push("/");
            })
            .catch((error) => {
                this.setState({ loading: false });
            });
    };

    render() {
        let form = (
            <form>
                <input
                    className={classes.Input}
                    type="text"
                    name="name"
                    placeholder="Your Name"
                ></input>
                <input
                    className={classes.Input}
                    type="email"
                    name="email"
                    placeholder="Your Email"
                ></input>
                <input
                    className={classes.Input}
                    type="text"
                    name="street"
                    placeholder="Street"
                ></input>
                <input
                    className={classes.Input}
                    type="text"
                    name="postal"
                    placeholder="Post Code"
                ></input>
                <Button clicked={this.orderHandler} btnType="Success">
                    ORDER
                </Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;