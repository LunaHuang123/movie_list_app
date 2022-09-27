import React from 'react';

function MovieCard(props) {

    return (
        <div className='movie-card-container'>
            <div className='img-container'>
                <img src={`https://image.tmdb.org/t/p/w342/${props.posterPath}`} alt="" />
            </div>
            <div>
                <div className='movie-card-btn-wrap'>
                    <button className='movie-card-like-btn'>Like</button>
                    <button className='movie-card-block-btn'>Block</button>
                </div>
            </div>
            <div>
                {/* <img src="" alt="" className='movie-card-thumbnail-gif' /> {}  HEART GIF goes here*/ }
                <p className='movie-card-text'>{props.title}</p>
            </div>
            <div>
                <p className='movie-card-text'>Release Date: {props.releaseDate}</p>
            </div>
            <div>
                <p className='movie-card-text'>Vote Count: {props.voteCount} | Average Score: {props.score}</p>
            </div>
            <div>
                <p className='movie-card-text'>{props.description}</p>
            </div>
        </div>
    )
}

export default MovieCard;