import {useContext, useState} from "react";
import {CustomerContext} from "../store/CustomerProvider.tsx";
import {Customer} from "../component/Customer.ts";

export default function Delete() {

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
        <div className="grid grid-cols-2 main-section p-6">

            {/*customer section*/}
            <div className="left-card m-3">
                <h2 className="mb-6 p-2 w-fit text-2xl">Delete Customer</h2>

                <input className="mb-6 p-2" type="text" placeholder="Email"
                       onChange={(e) => setEmail(e.target.value)}/>
                <div className="flex w-3/4 justify-center gap-10">
                    <button className="w-2/4" onClick={deleteCustomer}>Delete Last Customer</button>
                    <button className="w-2/4" onClick={deleteCustomerByEmail}>Delete By Email</button>
                </div>

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

                <input className="mb-6 p-2" type="text" placeholder="Item Code"
                />
                <div className="flex w-3/4 justify-center gap-10">
                    <button className="w-2/4">Delete Last Item</button>
                    <button className="w-2/4">Delete By Item Code</button>
                </div>

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