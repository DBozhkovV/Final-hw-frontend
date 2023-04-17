import React, { useState } from "react";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse
} from 'mdb-react-ui-kit';
import Logout from "../components/Logout";
import CreatePost from "../components/CreatePost";

const Navbar = () => {
    const [LogoutShow, setLogoutShow] = useState(false);
    const [createShow, setCreateShow] = useState(false);

    const logedIn = () => {
        if (sessionStorage.getItem("id") !== null) {
            return (
                <>
                    <MDBNavbarItem>
                        <MDBNavbarLink href='/view'>View</MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                        <MDBNavbarLink onClick={() => setCreateShow(true)}>Create</MDBNavbarLink>
                            <CreatePost show = {createShow} onHide={() => setCreateShow(false)} />
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                        <MDBNavbarLink onClick={() => setLogoutShow(true)}>Logout</MDBNavbarLink>
                            <Logout show = {LogoutShow} onHide={() => setLogoutShow(false)} />
                    </MDBNavbarItem>
                </>
            )
        } else {
            return (
                <>
                    <MDBNavbarItem>
                        <MDBNavbarLink href='/login'>Login</MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                        <MDBNavbarLink href='/register'>Register</MDBNavbarLink>
                    </MDBNavbarItem>
                </>
            )
        }
    }

    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='/'>Social</MDBNavbarBrand>
                <MDBCollapse navbar>
                <MDBNavbarNav right fullWidth={false}>
                    {logedIn()}
                </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}

export default Navbar;