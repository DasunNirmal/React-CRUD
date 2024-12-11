import {useContext, useState} from "react";
import {CustomerContext} from "../component/CustomerProvider.tsx";
import {Customer} from "../component/Customer.tsx";

export default function DeleteCustomer() {

    const [customers, setCustomers] = useContext(CustomerContext);
    const [email, setEmail] = useState("");

    function deleteCustomer() {
        setCustomers((customers:Customer[]) => customers.slice(0,-1));
    }

    function deleteCustomerByEmail() {
        const filteredEmail = customers.filter((customer:Customer) => customer.email === email);
        console.log(filteredEmail);
        setCustomers((customers:Customer[]) => customers.slice(filteredEmail.length));
    }

    return (
        <>
            <h2>Delete Customer</h2><br/>
            <input className="inputCSS" type="text" placeholder="Email"
                   onChange={(e) => setEmail(e.target.value)}/><br/><br/>
            {customers.map((customer: Customer) => (
                <div
                    key={customer.email}>{customer.name + ' | ' + customer.email + ' | ' + customer.phone}</div>))}<br/>
            <button className="buttonCSS" onClick={deleteCustomer}>Delete Customer</button>
            <button className="buttonCSS" onClick={deleteCustomerByEmail}>Delete By Email</button>
        </>
    )
}