import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export class Services extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Our Services</h1>
                </div>
                <div>
                    <div className="card-body">
                        <div className="tab-content">
                            <Tabs>
                                <TabList>
                                    <Tab>Claims Filing and Case Administration</Tab>
                                    <Tab>Litigation Services</Tab>
                                    <Tab>System 7<sup>SM</sup></Tab>
                                </TabList>

                                <TabPanel>
                                    <div className="tab-pane fade p-2 active show" id="claims" role="tabpanel">
                                        <p>
                                            Let our team of dedicated bankruptcy professionals relieve you of the
                                            day-to-day burden of managing your bankruptcy portfolio. We have the expertise,
                                            experience, software and staff to manage:
                                    </p>
                                        <ul>
                                            <li>Electronic Claims Filing</li>
                                            <li>Electronic Bankruptcy Noticing</li>
                                            <li>E-mail Notices from CM/ECF Courts</li>
                                            <li>Redaction of Social Security Numbers</li>
                                            <li>Electronic Payment Vouchers</li>
                                            <li>Transfers of Claim</li>
                                        </ul>
                                        <p>
                                            Partnering with Becket &amp; Lee LLP also solves other common bankruptcy management issues, such as maintaining adequate staff levels as bankruptcies increase and decrease, and absorbing and processing the volume of paper mail that still keeps coming. We will monitor your cases to make sure your claims are properly filed, and that you get the recoveries which you are entitled to on your bankrupt accounts. You owe it to your bottom line to see how Becket &amp; Lee can make a difference for you.
                                    </p>
                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <div className="tab-pane fade p-2 active show" id="litigation" role="tabpanel">
                                        <p>
                                            Becket &amp; Lee stands ready to apply its long experience with the Bankruptcy Courts to help you develop a cost-efficient and effective litigation program by providing complete legal services in all Bankruptcy Courts, utilizing a nationwide network of local counsel. At no time, however, does Becket &amp; Lee “refer out” litigation accounts. We retain responsibility for all matters, and you work only with Becket &amp; Lee attorneys, giving you confidence that your litigation is being handled by experts.
                                    </p>
                                        <p>
                                            Among the litigation services we provide are:
                                    </p>
                                        <ul>
                                            <li>Complaints to Determine Dischargeability of Debt</li>
                                            <li>Objections to the Debtor’s Discharge</li>
                                            <li>Objections to Confirmation of a Plan</li>
                                            <li>Motions to Dismiss Under §707</li>
                                            <li>Motions for Relief from the Co-Debtor Stay</li>
                                            <li>Defense of Objections to Claim</li>
                                            <li>Defense of Preference Actions</li>
                                            <li>Defense of Trustee Avoidance Actions</li>
                                            <li>Defense of Automatic Stay Violation Actions</li>
                                            <li>Motions to Lift Automatic Stay</li>
                                            <li>Motions to Value Collateral</li>
                                            <li>Motions to Allow Administrative Claims</li>
                                            <li>Motions for Setoff</li>
                                        </ul>
                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <div className="tab-pane fade p-2 active show" id="system7" role="tabpanel">
                                        <p>
                                            Taking advantage of the latest technology and data resources, Becket &amp; Lee has developed "System7<sup>SM</sup>", which provides a cost effective method to track bankrupt Chapter 7 accounts. Your Chapter 7 accounts are referred to Becket &amp; Lee, where System7<sup>SM</sup> monitors the bankruptcies until they have been closed by the court. The bankruptcies are regularly scrubbed. If an account is identified as an asset case, it is moved from System7<sup>SM</sup> to our core bankruptcy system. There, a Proof of Claim is generated, filed with the court according to local procedures, and the bankruptcy is monitored for activity and payment.
                                    </p>
                                        <p>
                                            In addition, Becket &amp; Lee’s System7<sup>SM</sup> provides an electronic update to our clients when a Chapter 7 bankruptcy has been identified as:
                                    </p>
                                        <ul>
                                            <li>Dismissed and closed by the court</li>
                                            <li>Discharged and closed by the court</li>
                                            <li>Converted to another chapter</li>
                                            <li>Becoming an asset case</li>
                                        </ul>
                                        <p>
                                            Becket &amp; Lee’s System7<sup>SM</sup> provides the technology and economies of scale to maximize Proof of Claim recoveries from Chapter 7 portfolios.
                                    </p>
                                    </div>
                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>
                </div>
                <hr />
                <div>
                    <p> For more information call Steve Roberts or John Smith at 610.644.7800. </p>
                </div>
            </div>
        );
    };
}