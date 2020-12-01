﻿import React, { Component } from 'react';

export class Home extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12 col-lg-12 pull-right">
                    <div>
                        <div className="card ">
                            <div className="card-header">
                                <h3>Who We Are</h3>
                            </div>
                            <div className="card-body ">
                                <p>Becket &amp; Lee LLP specializes in legal and administrative management of bankrupt accounts using a sophisticated technology-driven and cost-effective approach, while adhering to the highest standard of quality, security and ethics. The firm's staff of over 175 employees includes a dynamic group of experienced attorneys and leaders recognized throughout the industry as experts in bankruptcy servicing. </p>
                            </div>
                        </div>
                        <br />
                        <div className="card ">
                            <div className="card-header">
                                <h3>Our Business</h3>
                            </div>
                            <div className="card-body ">
                                <p>Becket &amp; Lee has serviced bankrupt accounts since 1984, with an emphasis on consumer debt. Unlike other law firms and collection agencies, all of our resources, processes and staff are focused on maximizing our clients' bankruptcy recoveries. We do not purchase our clients' accounts, thus avoiding any possible conflict of interest. Our goal is to provide service and advice to each of our clients as if we were an in-house bankruptcy department.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}