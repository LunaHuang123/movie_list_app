import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            index: 0,
            popularMoviesList: this.props.popularList
        }
        this.intervalHandler = null;
    }

    componentDidMount() {
        this.props.fetchPopularPage(1);
        this.intervalHandler = setInterval(() =>{
            if (this.props.popularList && this.state.index < this.props.popularList.length-1) {
                this.setState({ index: this.state.index+1})
            } else if (this.props.popularList && this.state.index === this.props.popularList.length-1) {
                this.setState({index: 0})
            }
        }, 2500)
    }

    componentWillUnmount() {
        clearInterval(this.intervalHandler);
    }



    render() {
        return (
        (this.props.popularList.length > 0) ?
            <div className='homepage'>
                <p className='homepage-intro'>Welcome to Movie List. Ready to find your favorite movie?</p>
                <p className='homepage-top-selections'>Top Selections</p>
                <Link to='/top_rated'><button className='homepage-explore'>Explore Now!</button></Link>
                <div className='homepage-carosel'>
                    <div className='homepage-carosel-details'>
                        <div className='carosel-info'>
                            <img onClick={this.loadMovieDetails} src={`https://image.tmdb.org/t/p/w342${this.props.popularList[this.state.index].poster_path}`} alt="" />
                            <div>
                                <p className='homepage-title'>{this.props.popularList[this.state.index].title}</p>
                                <p className='homepage-details-inner'>{this.props.popularList[this.state.index].overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='homepage-details'>{this.props.popularList[this.state.index].overview}</p>
            </div>
        :
        null
        ) 
    }
}

Homepage.propTypes = {
    popularList: PropTypes.array
}


export default Homepage