import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { ThisNews } from './ThisNews';

export class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            params: [],
            selectedNewsId: "1"
        };
    }

    getClickedNewsId(value) {
        this.setState({
            selectedNewsId: value
        });
    }

    async populateNewsData() {
        const response = await fetch('api/news');
        const data = await response.json();
        this.setState({ params: data });
    }

    componentDidMount() {
        this.populateNewsData();
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8 blog-main">

                    {this.state.params.map(param => {
                        if (param.id == this.state.selectedNewsId) {
                            return (
                                <div key={param.id}>
                                    <ThisNews
                                        selectedNewsId={this.state.selectedNewsId}
                                        selectedPathName={this.props.location.pathname}
                                    />
                                </div>
                            );
                        }
                    })}
                </div>

                <aside className="col-md-4 blog-sidebar" >
                    <div className="p-4 mb-3 bg-light rounded">
                        <h4 className="font-bold">News...</h4>
                        <div className="my-3 p-3 bg-white rounded shadow-sm">
                            {this.state.params.map(param => (
                                <div className="media text-muted pt-3" key={param.id}>
                                    <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray" >
                                        {param.datePosted}
                                        <Link
                                            to={`/news/${param.id}`}
                                            onClick={() => this.getClickedNewsId(param.id)}
                                        >
                                            <strong className="d-block text-gray-dark">{param.heading}</strong>
                                        </Link>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        );
    }


}
