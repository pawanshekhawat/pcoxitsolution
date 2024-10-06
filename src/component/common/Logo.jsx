import React from "react";
import { Link } from 'react-router-dom'

export const Logo = () => (
    <div className="logo">
        <Link to="/">
            <img loading="lazy" src="/assets/images/logo/logo-black.png" alt="Digital Agency" style={{width: "180px !important"}} className="mainLogo"/>
        </Link>
    </div>
)

