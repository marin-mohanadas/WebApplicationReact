import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Partners.css';

export class Partners extends Component {

    constructor(props) {
        super(props);
        this.state = { params: [], loading: true };
    }

    async populatePartnersData() {
        const response = await fetch('api/partners');
        const data = await response.json();
        this.setState({ params: data, loading: false });
    }

    componentDidMount() {
        this.populatePartnersData();
    }

    static renderPartnersData(params) {
        return (
            <div className="containerPartner">
                <div className="row">
                    {params.map(param => (
                        <div className="col-lg-4 setMargin" key={param.id}>
                            <img className="bd-placeholder-img rounded-circle" src={param.photoUrl} alt={param.name} title={param.name} />
                            <h2>{param.name}</h2>
                            <p>
                                <Link className="text-muted" to={`/partners/${param.userName}`}>Meet {param.name} »</Link>
                            </p>
                        </div>
                    ))}
                </div >
            </div >
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Partners.renderPartnersData(this.state.params)

        return (
            <div>
                <h1>Partners</h1>
                {contents}
            </div>

        );
    }

}
