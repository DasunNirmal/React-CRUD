import {useContext, useState} from "react";
import {CustomerContext} from "./CustomerProvider.tsx";

export const [customers, setCustomers] = useContext(CustomerContext);
/*
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
*/

export const [state, setState] = useState({
    name: "",
    email: "",
    phone: ""
});