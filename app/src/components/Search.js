'use strict'
import React, { Component } from 'react';
import {Link}   from 'react-router';



class Search extends Component {
	constructor(props) {
		super(props);
		this.state = { term: ''}
	}

	render(){
		return(
       <form className="navbar navbar-static-top" id="user-search" role="navigation">
  			<input type="text" 
               id = "search"
  			       className="search-field form-control" 
  			       placeholder="Search all users by name or email"
  			       value = { this.state.term }
  			       onChange = { event => this.onInputChange(event.target.value) } />
  			<Link to='/searchresults' title="dashboard">
     			<button className="btn">Search</button>
  			</Link>
  		</form>
  	)
	}
	onInputChange(term){
    //console.log(this.state.term, "on input change" )
    this.setState({term});
    //this.props.onSearchTermChange(term);

  }
}




export default Search