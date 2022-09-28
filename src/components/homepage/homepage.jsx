import React from 'react'

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
        }, 1500)
    }

    componentWillUnmount() {
        clearInterval(this.intervalHandler);
    }



    render() {
        return (
        (this.props.popularList.length > 0) ?
            <div className='homepage'>
                <p className='homepage-intro'>Welcome to Movie List. Check out some of our Selections!</p>
                <div className='homepage-carosel'>
                    <div className='homepage-carosel-details'>
                        <img onClick={this.loadMovieDetails} src={`https://image.tmdb.org/t/p/w342${this.props.popularList[this.state.index].poster_path}`} alt="" />
                        <p>{this.props.popularList[this.state.index].title}</p>
                    </div>
                </div>
                
            </div>
        :
        null
        ) 
    }
}

export default Homepage