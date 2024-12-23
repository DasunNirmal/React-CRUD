import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import Dashboard from "./pages/Dashboard.tsx";
import Save from "./pages/Save.tsx";
import Update from "./pages/Update.tsx";
import Delete from "./pages/Delete.tsx";
import {RootLayout} from "./component/RootLayout.tsx";
import {CustomerProvider} from "./store/CustomerProvider.tsx";

function App() {
    /*Route is a destination*/

    const routers =  createBrowserRouter([
        {path : '',
            element : <RootLayout/>,
            children:[
                {path : '',element : <Dashboard/>},
                {path : '/add',element:<Save/>},
                {path : '/update',element:<Update/>},
                {path : '/delete',element:<Delete/>}
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
