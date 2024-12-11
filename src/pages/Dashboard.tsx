import {useContext} from "react";
import {CustomerContext} from "../component/CustomerProvider.tsx";
import {Customer} from "../component/Customer.tsx";

export default function Dashboard() {
    const [customers, setCustomers] = useContext(CustomerContext);
    return (
        <>
            <h2>Dash Board Component</h2>
            {customers.map((customer: Customer) => (
                <div key={customer.email}>{customer.name + ' | ' + customer.email + ' | ' + customer.phone}</div>))}
        </>
    )
}