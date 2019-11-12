import React, { Component } from "react";
import { loadData } from "../utils/loadData";

class IssueList extends Component {
    state = {
        issues: []
    };

    async componentDidMount() {
        const issues = await loadData(
            `https://api.github.com/repos/facebook/create-react-app/issues`
        );

        this.setState({
            issues
        });
    }

    render() {
        const { issues } = this.state;

        return (
            <ul>
                {issues.map((issue, index) => (
                    <li key={issue.id}>
                        <h2>{issue.title}</h2>
                        <p>
                            <a href={issue.url}>{issue.url}</a>
                        </p>
                        <p>{issue.body}</p>
                    </li>
                ))}
            </ul>
        );
    }
}

export default IssueList;
