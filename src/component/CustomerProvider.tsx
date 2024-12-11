import {createContext, useState} from "react";
import {Customer} from "../../../react-intro/src/component/Customer.tsx";

export const CustomerContext = createContext();

export function CustomerProvider({children}) {
    const [customer, setCustomer] = useState<Customer []>([]);

    return (
        <CustomerContext.Provider value={[customer, setCustomer]}>
            {children}
        </CustomerContext.Provider>
    )
}