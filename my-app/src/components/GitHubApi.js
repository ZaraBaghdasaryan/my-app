import React, {Component} from 'react';

export class GitHubApi extends Component{
    static displayName = GitHubApi.name;

    numberOfRepos =0;

    constructor(){
        super();
        this.state = {
            numberOfRepos: 0
        }
    }
    
componentDidMount(){
fetch('https://api.github.com/users/ZaraBaghdasaryan/repos')
.then(response => response.json())
.then(json => {
    this.setState({
        numberOfRepos: json.length
    })
});
}

render(){
    return(
        <div>
            <h1>Hello there!</h1>
            <p>Number of repos in my github are: {this.state.numberOfRepos}</p>
        </div>
        );
    }
}
