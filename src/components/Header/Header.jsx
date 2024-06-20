import React from "react";
import PropTypes from 'prop-types';
import Navbar from "./Navbar";
import Iconbar from "./Iconbar";



export default function Header() {

    return (
        <>
            <div><Navbar /></div>
            <div><Iconbar /></div>
        </>
    );
}
