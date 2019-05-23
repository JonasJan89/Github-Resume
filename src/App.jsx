import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header.jsx'
import GithubForm from './components/GithubForm.jsx';
import GithubResume from './components/GithubResume.jsx';
import FetchingError from './components/FetchingError.jsx';
import './styles.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      searchProfileName: '',
      githubRepos: [],
      githubProfile: {},
      fetchingError: {},
      fetchingErrorExist: false,
      dataReceived: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const searchProfileName = e.target[0].value;

    axios.all([
      axios.get(`https://api.github.com/users/${searchProfileName}`),
      axios.get(`https://api.github.com/users/${searchProfileName}/repos`),
    ])
      .then(axios.spread((profileResponse, reposResponse) => {
        this.setState({
          githubRepos: reposResponse.data,
          githubProfile: profileResponse.data,
          searchProfileName: searchProfileName,
          fetchingError: {},
          dataReceived: true,
          fetchingErrorExist: false,
        });
      }))
      .catch((profileError, reposError) => {
        this.setState({
          fetchingError: profileError ? profileError.response : reposError.response,
          searchProfileName: searchProfileName,
          githubRepos: [],
          githubProfile: {},
          dataReceived: false,
          fetchingErrorExist: true,
        })
      })
  }

  render() {
    return (
      <div className='app'>
        <div className='container'>
          <Header handleSubmit={this.handleSubmit} />
          {this.state.dataReceived &&
           <GithubResume githubRepos={this.state.githubRepos}  githubProfile={this.state.githubProfile} />
          }
          {this.state.fetchingErrorExist &&
           <FetchingError status={this.state.fetchingError.status} name={this.state.searchProfileName} />
          }
        </div>
      </div>
    );
  }
};
