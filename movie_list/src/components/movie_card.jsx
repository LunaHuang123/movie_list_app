import React from 'react';

class MovieCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isLike : this.props.like ? this.props.like : false,
            isBlock : this.props.block ? this.props.block : false,
            showDetails : this.props.showDetails ? this.props.showDetails : false,
            imgClickHanlder : this.props.imgClickHandler ? this.props.imgClickHandler : null
        }
        this.imgClickHandler = this.imgClickHandler.bind(this);
        this.likeHandler = this.likeHandler.bind(this);
        this.blockHandler = this.blockHandler.bind(this);
    }
    
    imgClickHandler() {
        if (this.props.imgClickHandler) {
            this.props.imgClickHandler()
        }
    }

    likeHandler() {
        if (this.state.isLike) { //button displays unlike
            this.setState({isLike: false},() => {
                this.props.unlikeMovie(this.props.movieId);
            });
        } else {
            this.setState({isLike : true}, () => {
                this.props.likeMovie(this.props.movieId, {title: this.props.title, posterPath:this.props.posterPath})
            })
        }
    }

    blockHandler() {
        if (this.state.isBlock) { //button displays unblock
            this.setState({isBlock: false}, () => {
                this.props.unblockMovie(this.props.movieId);
            });
        } else {
            this.setState({isBlock : true}, () => {
                this.props.blockMovie(this.props.movieId, {title: this.props.title, posterPath:this.props.posterPath})
            })
        }
    }


    render() {
        return (
            <div className='movie-card-container'>
                <div className='img-container'>
                    <img onClick={this.imgClickHandler}src={`https://image.tmdb.org/t/p/w342/${this.props.posterPath}`} alt="" />
                </div>
                <div>
                    <div className='movie-card-btn-wrap'>
                        <button onClick={this.likeHandler} className='movie-card-like-btn'>{this.state.isLike ? 'Unlike' : 'Like'}</button>
                        <button onClick={this.blockHandler} className='movie-card-block-btn'>{this.state.isLike ? 'Unblock' : 'Block'}</button>
                        {this.state.showDetails ? <button>Show Details</button> : <></>}
                    </div>
                </div>
                <div>
                    {/* <img src="" alt="" className='movie-card-thumbnail-gif' /> {}  HEART GIF goes here*/ }
                    <p className='movie-card-text'>{this.props.title}</p>
                </div>
                <div>
                    <p className='movie-card-text'>Release Date: {this.props.releaseDate}</p>
                </div>
                <div>
                    <p className='movie-card-text'>Vote Count: {this.props.voteCount} | Average Score: {this.props.score}</p>
                </div>
                <div>
                    <p className='movie-card-text'>{this.props.description}</p>
                </div>
            </div>
        )

    }
}

export default MovieCard;