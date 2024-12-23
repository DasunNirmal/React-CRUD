import {useContext, useState} from "react";
import {CustomerContext} from "../store/CustomerProvider.tsx";
import {Customer} from "../component/Customer.ts";

export default function Save() {
    const [customers, setCustomers] = useContext(CustomerContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    function addCustomer() {
        const newCustomer = new Customer(name, email, phone);
        setCustomers((customers: Customer[]) => [...customers, newCustomer]);
    }

    return (
        <div className="grid grid-cols-2 main-section p-6">
            {/*customer section*/}
            <div className="left-card m-3">
                <h2 className="mb-6 p-2 w-fit text-2xl">Save Customers</h2>

                <input className="mb-6 p-2" type="text" placeholder="Name"
                       onChange={(e) => setName(e.target.value)}/>
                <input className="mb-6 p-2" type="text" placeholder="Email"
                       onChange={(e) => setEmail(e.target.value)}/>
                <input className="mb-6 p-2" type="text" placeholder="Phone Number"
                       onChange={(e) => setPhone(e.target.value)}/>
                <button onClick={addCustomer}>Add Customer</button>

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
                <h2 className="mb-6 p-2 w-fit text-2xl">Save Items</h2>

                <input className="mb-6 p-2" type="text" placeholder="Item COde"
                       />
                <input className="mb-6 p-2" type="text" placeholder="Item Name"
                       />
                <input className="mb-6 p-2" type="text" placeholder="Item Quantity"
                       />
                <button>Add Item</button>

                <table className="table-auto border border-gray-300 w-full mt-6">
                    <thead>
                    <tr>
                        <td>Item Code</td>
                        <td>Item Name</td>
                        <td>Quantity</td>
                    </tr>
                    </thead>
                    <tbody>
                    {/*{items.map((items: Item) => (
                        <tr key={items.code}>
                            <td>{items.code}</td>
                            <td>{items.itemName}</td>
                            <td>{items.qty}</td>
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