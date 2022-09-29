import React from 'react';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faBan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PropTypes} from 'prop-types'

class MovieCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isLike : this.props.like ? this.props.like : false,
            isBlock : this.props.block ? this.props.block : false,
            imgClickHanlder : this.props.imgClickHandler ? this.props.imgClickHandler : null,
            isIndexPage: this.props.isIndexPage ? this.props.isIndexPage : false
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
                    {
                        this.state.isIndexPage ?
                        <div className='movie-card-btn-wrap'>
                            <div onClick={this.likeHandler} className='movie-card-like-btn'>{this.state.isLike ? <p>Unlike</p> : <p>Like</p>}</div>
                            <div onClick={this.blockHandler} className='movie-card-block-btn'>{this.state.isBlock ? 'Unblock' : 'Block'}</div>
                        </div>
                        :
                        <div className='movie-card-btn-wrap-like-block-list'>
                            <div onClick={this.likeHandler} className='movie-card-like-btn-like-blocked-list'>{this.state.isLike ? <FontAwesomeIcon className='active icon' icon={faHeart} /> : <FontAwesomeIcon className='icon' icon={faHeart} />}</div>
                            <div onClick={this.blockHandler} className='movie-card-block-btn-like-blocked-list'>{this.state.isBlock ? <FontAwesomeIcon className='active icon' icon={faBan} /> : <FontAwesomeIcon className='icon' icon={faBan} />}</div>
                            <div onClick={this.imgClickHandler}><FontAwesomeIcon className='icon' icon={faEllipsisH} /></div>
                        </div>
                    }
                </div>
                <div>
                    {/* <img src="" alt="" className='movie-card-thumbnail-gif' /> {}  HEART GIF goes here*/ }
                    <p className='movie-card-text movie-card-title'>{this.props.title}</p>
                </div>
                {
                    this.state.isIndexPage ?
                    <div>
                        <p className='movie-card-text'>Release Date: {this.props.releaseDate}</p>
                    </div>
                    :
                    <></>
                }
                {
                    this.state.isIndexPage ?
                    <div>
                        <div>
                            <p className='movie-card-text'>Vote Count: {this.props.voteCount} | Average Score: {this.props.score}</p>
                        </div>
                        <div>
                            <p className='movie-card-text'>{this.props.description}</p>
                        </div>
                    </div>
                    :
                    <></>
                }
            </div>
        )

    }
}
MovieCard.propTypes = {
    isLike: PropTypes.bool,
    isBlock: PropTypes.bool,
    imgClickHandler: PropTypes.func,
    isIndexPage: PropTypes.bool,
    description: PropTypes.string,
    voteCount: PropTypes.number,
    releaseDate: PropTypes.string,
    title: PropTypes.string,
    movieId: PropTypes.number,
    posterPath: PropTypes.string
}
export default MovieCard;