import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MarkdownInput from './MarkdownInput.js';
import HtmlOutput from './HtmlOutput.js';

class App extends React.Component {
	constructor(props) {
		  super(props);
		this.state = {
		  markdown: 'i love coding'
		};
		this.handleChange = this.handleChange.bind(this);
	}
		handleChange(event) {
	  this.setState({
		markdown: event.target.value
	  });
	}
  render() {
    return (
		<div className="container">
		  <h1 className="text-center">Markdown Previewer</h1>
		  <div className="row">
			<div className="col col-12 col-md-6">
			  <MarkdownInput
				markdown={this.state.markdown}
				handleChange={this.handleChange}
			  />
			</div>
			<div className="col col-12 col-md-6">
			  <HtmlOutput
				markdown={this.state.markdown}
			  />
			</div>
		  </div>
		</div>

    );
  }
}

export default App;
