import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import PropTypes from 'prop-types';



export default function Layout() {

    return (
        <div className="App">
            <main>
                <div className="flex">
                    {/*Show sidebar only if viewer is host*/}
                    <div style={{ flex: 1}}>
                        <Header />
                        <Outlet />
                    </div>
                </div>
            </main>
        </div>
    )
}