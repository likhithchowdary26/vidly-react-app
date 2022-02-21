import React, { Component } from 'react';
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
    state = { 
        movies : getMovies()
     }
    
     handleDelete = (movie) => {
        console.log(movie._id)
        const movies = this.state.movies.filter(m => m._id!==movie._id);
        this.setState({ movies:movies })
    }

    render() { 
        console.log(this.state.movies);
        if(this.state.movies.length === 0)
            return <div className="container"><br/><h3>Showing no Movies</h3></div>;
        return (
            <div className='container'>
                <br/>
                <h3>Showing {this.state.movies.length} movies</h3>
                <br/>
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
                        {this.state.movies.map(movie=>(
                            <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <button onClick={() => this.handleDelete(movie)} type="button" className="btn btn-danger">Delete</button>
                        </tr>
                        ))}
                        
                    </tbody>
                </table>
            </div>
        );
    }
}
 
export default Movies;