import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import Dashboard from "./pages/Dashboard.tsx";
import AddCustomer from "./pages/AddCustomer.tsx";
import UpdateCustomer from "./pages/UpdateCustomer.tsx";
import DeleteCustomer from "./pages/DeleteCustomer.tsx";
import {RootLayout} from "./component/RootLayout.tsx";
import {CustomerProvider} from "./component/CustomerProvider.tsx";

function App() {
    /*Route is a destination*/

    const routers =  createBrowserRouter([
        {path : '',
            element : <RootLayout/>,
            children:[
                {path : '',element : <Dashboard/>},
                {path : '/add',element:<AddCustomer/>},
                {path : '/update',element:<UpdateCustomer/>},
                {path : '/delete',element:<DeleteCustomer/>}
            ]},
    ])

    return (
        <>
            <CustomerProvider>
                <RouterProvider router={routers}/>
            </CustomerProvider>
        </>
    )
}
export default App
