import {useContext, useState} from "react";
import {CustomerContext} from "../component/CustomerProvider.tsx";
import {Customer} from "../component/Customer.tsx";
import {useNavigate} from "react-router";

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
        <>
            <h2>Add Customer</h2>

            <input className="inputCSS" type="text" placeholder="Name"
                               onChange={(e) => setName(e.target.value)}/><br/><br/>
            <input className="inputCSS" type="text" placeholder="Email"
                               onChange={(e) => setEmail(e.target.value)}/><br/><br/>
            <input className="inputCSS" type="text" placeholder="Phone Number"
                               onChange={(e) => setPhone(e.target.value)}/>
            <br/><br/>
            <button className="buttonCSS" onClick={addCustomer}>Add Customer</button>
        </>
    )
}