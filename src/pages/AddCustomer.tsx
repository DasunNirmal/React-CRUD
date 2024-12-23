import {useContext, useState} from "react";
import {CustomerContext} from "../component/CustomerProvider.tsx";
import {Customer} from "../component/Customer.ts";
import {useNavigate} from "react-router";
import "./AddCustomer.css"

export default function AddCustomer() {
    const navigate = useNavigate();
    const [customers, setCustomers] = useContext(CustomerContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    function addCustomer() {
        const newCustomer = new Customer(name, email, phone);
        setCustomers((customers: Customer[]) => [...customers, newCustomer]);
        navigate('/')
    }

    return (
        <div className="grid grid-cols-2 main-section p-6">
                {/*customer section*/}
                <div className="left-card m-3">
                    <h2>Add Customer</h2>

                    <input className="inputCSS" type="text" placeholder="Name"
                           onChange={(e) => setName(e.target.value)}/>
                    <input className="inputCSS" type="text" placeholder="Email"
                           onChange={(e) => setEmail(e.target.value)}/>
                    <input className="inputCSS" type="text" placeholder="Phone Number"
                           onChange={(e) => setPhone(e.target.value)}/>
                    <button className="buttonCSS" onClick={addCustomer}>Add Customer</button>
                </div>
            {/*item section*/}
            <div className="right-card m-3">
                <h2>Add Item</h2>

                <input className="inputCSS" type="text" placeholder="Item Name"
                       onChange={(e) => setName(e.target.value)}/>
                <input className="inputCSS" type="text" placeholder="Item"
                       onChange={(e) => setEmail(e.target.value)}/>
                <input className="inputCSS" type="text" placeholder="Item"
                       onChange={(e) => setPhone(e.target.value)}/>
                <button className="buttonCSS" onClick={addCustomer}>Add Item</button>
            </div>
        </div>
    )
}