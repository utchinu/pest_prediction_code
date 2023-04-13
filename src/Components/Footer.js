import React from 'react'
import styled from 'styled-components'

export default function Footer() {
    return (
        <FooterContainer className="main-footer">
        <div className="footer-middle">
        <div className="container">
        <div className="row">
            {/* Column1 */}
            <div className="col-md-3 col-sm-6">
                <h4>  </h4>
                <ul className="list-unstyled">
                    <li><a href=""> </a> </li>
                    <li><a href=""> </a></li>
                    <li><a href=""> </a></li>
                    <li><a href=""> </a></li>
                </ul>
            </div>
                {/* Column2 */}
            <div className="col-md-3 col-sm-6">
                <h4>  </h4>
                <ul className="list-unstyled">
                    <li><a href=""> </a></li>
                    <li><a href=""> </a></li>
                    <li><a href=""> </a></li>
                    <li><a href=""> </a></li>
                </ul>
            </div>
                {/* Column2 */}
            <div className="col-md-3 col-sm-6">
                <h4> </h4>
                <ul className="list-unstyled">
                    <li><a href=""> </a></li>
                    <li><a href=""> </a></li>
                    <li><a href=""> </a></li>
                    <li><a href=""> </a></li>
                </ul>
            </div>
                {/* Column2 */}
            <div className="col-md-3 col-sm-6">
                <h4>  </h4>
                <ul className="list-unstyled">
                    <li><a href=""> </a></li>
                    <li><a href=""> </a></li>
                    <li><a href=""> </a></li>
                    <li><a href=""> </a></li>
                </ul>
            </div>                        
        </div>
        <div className="footer-bottom">
            <p className="text-xs-center">
            &copy;{new Date().getFullYear()} Pest prediction-All rights reserved
            </p>
        </div>
        </div>
        </div>
        </FooterContainer>
    );
}

const FooterContainer = styled.footer`
    .footer-middle {
        background: var(--mainDark);
        padding-top: 3rem;
        color: var(--mainWhite);
    }

    .footer-bottom {
        padding-top: 3rem;
        padding-bottom: 2rem;
    }
`;