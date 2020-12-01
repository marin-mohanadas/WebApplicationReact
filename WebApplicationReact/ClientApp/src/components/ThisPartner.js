import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './ThisPartner.css';

export class ThisPartner extends Component {

    constructor(props) {
        super(props);
        this.state = { param: [], userName: props.match.params.username, loading: true };
    }

    async populatePartnerData() {
        const response = await fetch(`api/partners/${this.state.userName}`);
        const data = await response.json();
        this.setState({ param: data, loading: false });
    }

    componentDidMount() {
        this.populatePartnerData();
    }

    static renderPartnerData(param) {
        return (
            <div>
                <div className="row featurette">
                    <Link className="text-muted" to="/partners">« Partners</Link>
                </div>
                <br />
                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">{param.name}</h2>
                        <p className="lead">{param.biography}</p>
                    </div>
                    <div className="col-md-5">
                        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto imageSize"
                            src={param.photoUrl}
                            alt={param.name}
                            title={param.name} />
                    </div>
                </div>
            </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : ThisPartner.renderPartnerData(this.state.param)

        return (<div>{contents}</div>);
    };
}
