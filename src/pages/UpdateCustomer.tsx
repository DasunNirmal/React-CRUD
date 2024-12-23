import {useNavigate} from "react-router";
import {useContext, useState} from "react";
import {CustomerContext} from "../component/CustomerProvider.tsx";
import {Customer} from "../component/Customer.ts";

export default function UpdateCustomer() {

    const navigate = useNavigate();
    const [customers, setCustomers] = useContext(CustomerContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    function updateCustomer() {
        const updatedCustomer = customers.map((customers:Customer) => customers.email === email ?
            {...customers, name:name,email:email,phone:phone} : customers);
        console.log(updatedCustomer);
        setCustomers(updatedCustomer)
        navigate('/')
    }

    return (
        <div className="grid grid-cols-2 main-section p-6">
            {/*customer section*/}
            <div className="left-card m-3">
                <h2 className="mb-6 p-2 w-fit text-2xl">Update Customer</h2>

                <input className="mb-6 p-2" type="text" placeholder="Name"
                       onChange={(e) => setName(e.target.value)}/>
                <input className="mb-6 p-2" type="text" placeholder="Email"
                       onChange={(e) => setEmail(e.target.value)}/>
                <input className="mb-6 p-2" type="text" placeholder="Phone Number"
                       onChange={(e) => setPhone(e.target.value)}/>
                <button className="buttonCSS" onClick={updateCustomer}>Update Customer</button>

                <table className="table-auto border border-gray-300 w-full mt-6">
                    <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>phone</td>
                    </tr>
                    </thead>
                    <tbody>
                    {customers.map((customer: Customer) => (
                        <tr key={customer.email}>
                            <td>{customer.name}</td>
                            <td>{customer.email}</td>
                            <td>{customer.phone}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/*item section*/}
            <div className="right-card m-3">
                <h2 className="mb-6 p-2 w-fit text-2xl">Update Items</h2>

                <input className="mb-6 p-2" type="text" placeholder="Item Name"
                />
                <input className="mb-6 p-2" type="text" placeholder="Item"
                />
                <input className="mb-6 p-2" type="text" placeholder="Item"
                />
                <button className="buttonCSS">Add Item</button>

                <table className="table-auto border border-gray-300 w-full mt-6">
                    <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>phone</td>
                    </tr>
                    </thead>
                    <tbody>
                    {/*{customers.map((customer: Customer) => (
                        <tr key={customer.email}>
                            <td>{customer.name}</td>
                            <td>{customer.email}</td>
                            <td>{customer.phone}</td>
                        </tr>
                    ))}*/}
                    <tr>

                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}