import React, { Component } from "react";
import { movies } from "../services/fakeMovieService";
class Movies extends Component {
  state = {
    movies,
    deleted: [],
  };
  handleDelete = (_id) => {
    const movie = this.state.movies.find((x) => x._id === _id);
    this.setState({ deleted: [...this.state.deleted, movie] });
    this.setState({ movies: this.state.movies.filter((x) => x._id !== _id) });
  };
  handleReinstate = (_id) => {
    const movie = this.state.deleted.find((movie) => movie._id === _id);
    this.setState({ movies: [...this.state.movies, movie] });
    this.setState({
      deleted: this.state.deleted.filter((movie) => movie._id !== _id),
    });
  };

  render() {
   
    return (
      <div>
          <div className={this.getbadgesClasses()}>{this.displayMessage()}</div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td
                  onClick={() => this.handleDelete(movie._id)}
                  className="btn  btn-danger btn-outline-warning btn-sm active "
                >
                  Remove
                </td>
              </tr>
            ))}
          </tbody>
          <tbody>
            {this.state.deleted.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td
                  onClick={() => this.handleReinstate(movie._id)}
                  className="btn  btn-danger btn-outline-primary btn-sm active "
                >
                  ADD
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  getbadgesClasses(){
    let classes =" badge m-2 badge-";
    classes +=  this.state.movies.length === 0 ? "warning" : "primary";
    return classes;
}
  displayMessage=()=>{
      let notifyAfter = 'There are no elements in our data base'
      let notifyBefore = `there are ${this.state.movies.length} movies in our data base`
      
  return this.state.movies.length === 0 ? <p>{notifyAfter}</p> : <h1>{notifyBefore}</h1> 

  }
}

export default Movies;
