import React, { Component } from 'react';
import data from './data.js';

class From extends Component {
    constructor(props) {
        super(props);
        this.state = {
        people: data
        };
    }   



   
    render() {
        let person = this.state.people[this.props.index]
        return (
            <div>
            <div>
            <h1 style={{textDecoration:'underline'}}>{person.name.first} {person.name.last}</h1></div>
                <h4>From: { person.city } { person.country }</h4>
                <h4> Job title: {person.title}</h4>
                <h4> Employer: {person.employer}</h4>
                <h4> Favorite Movies: {person.favoriteMovies}</h4>
            </div>
        )
    }
   }




























export default From 