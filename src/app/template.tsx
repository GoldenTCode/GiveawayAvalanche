"use client"

import { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { usePathname } from 'next/navigation'

import Image from 'next/image'

export default function RootTemplate({
    children,
  }: {
    children: React.ReactNode
  }) {
    const [showDashboardAlert, setshowDashboardAlert] = useState(true);
    const pathname = usePathname()
    
    return (
        <>
            <Navbar expand="lg" className="ga-navbar border-bottom border-light-subtle">
                <Container fluid={true}>
                    <Navbar.Brand href="/" className='text-primary' style={{ fontSize: "25px", fontWeight: "700" }}>Giveaway<span className="ga-navbar-title-sub">Avalanche</span></Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/" className='text-info' style={{fontWeight: pathname === "/" ? "bold" : "normal"}}>Home</Nav.Link>
                            <Nav.Link href="/about" className='text-info' style={{fontWeight: pathname === "/about" ? "bold" : "normal"}}>About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                    <Navbar.Collapse className="justify-content-end">
                        <Button type="submit" variant="info" disabled={true}>Login</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div style={{ height: "calc(100vh - 77px)" }}>
                {children}
            </div>
        </>
    )
}