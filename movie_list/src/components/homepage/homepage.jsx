import React from 'react'
import baseURL from '../../constants/base_url';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            index: 0,
            popularMoviesList: this.props.popularList
        }
        this.prevBtnHandler = this.prevBtnHandler.bind(this);
        this.nextBtnHandler = this.nextBtnHandler.bind(this);
    }

    componentDidMount() {
        this.props.fetchPopularPage(1);
    }

    prevBtnHandler() {
        if(this.state.index === 0) {
            this.setState({ index: this.props.popularList.length-1});
        } else {
            this.setState({ index: this.state.index-1});
        }
    }

    nextBtnHandler() {
        if(this.state.index === this.props.popularList.length-1) {
            this.setState({ index: 0});
        } else {
            this.setState({ index: this.state.index+1});
        }
    }

    render() {
        return (
        (this.props.popularList.length > 0) ?
            <div>
                <p>Welcome to Movie List. Check out some of our Selections!</p>
                <div>
                    <button onClick={this.prevBtnHandler}>Prev</button>
                    <div>
                        <img onClick={this.loadMovieDetails} src={`${baseURL}${this.props.popularList[this.state.index].poster_path}`} alt="" />
                        <p>{this.props.popularList[this.state.index].title}</p>
                    </div>
                    <button onClick={this.nextBtnHandler}>Next</button>
                </div>
                
            </div>
        :
        null
        ) 
    }
}

export default Homepage