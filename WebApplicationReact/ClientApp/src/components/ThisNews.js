import React, { Component } from 'react';

export class ThisNews extends Component {

    constructor(props) {
        super(props);
        this.state = {
            param: []
        };
    }

    async populateThisNews() {
        let currentUrl = this.props.selectedPathName;
        if (currentUrl === '/news')
            currentUrl = `${currentUrl}/${this.props.selectedNewsId}`

        const response = await fetch(`api${currentUrl}`);
        const data = await response.json();
        this.setState({ param: data });
    }

    componentDidMount() {
        this.populateThisNews();
    }

    render() {
        return (
            <div className="row">
                <h2>{this.state.param.heading}</h2>
                <p>{this.state.param.description}</p>
            </div>
        );
    }


}
