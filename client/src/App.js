import React from 'react';
import './App.css';
import axios from 'axios';
import ProjectsList from './components/ProjectsList';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/projects')
      .then(res => {
        this.setState(() => ({ projects: res.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      })
  }

  render() {
    return (
      <div>
        <ProjectsList />
      </div>
    )
  }
}

export default App;
