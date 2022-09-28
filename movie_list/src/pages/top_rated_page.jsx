import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { connect } from 'react-redux';
import MovieList from '../components/movieListComponent/layout';
import { fetchSaveTopRatedPage } from '../actionCreators/topRatedPageActionCreator';
import Button from 'react-bootstrap/Button';
// A wrapper that fetch page data then feed to innercomponent
const fetchDataWrapper = (InnerComponent) => {
  return function (props) {
    let {data, status, fetchData, pageNumber} = props;
    useEffect(() => {
      fetchData(pageNumber);
    }, [pageNumber, fetchData])
    return (
      <InnerComponent movieListData={data} status={status}/>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let pageNumber = parseInt(ownProps.pageNumber);
  if (isNaN(pageNumber)) pageNumber = 1;
  let data;
  let status;
  if (state.topRatedPage.cachedPages[pageNumber]) {
    data = state.topRatedPage.cachedPages[pageNumber].data
      ? state.topRatedPage.cachedPages[pageNumber].data.results
      : [];
    status = state.topRatedPage.cachedPages[pageNumber].status;
  } else {
    data = [];
    status = 'NA';
  }
  return {data, status};
}

const mapDispatchToProps = ({fetchData: fetchSaveTopRatedPage});

const ConnectList = connect(mapStateToProps, mapDispatchToProps)(fetchDataWrapper(MovieList));

export default function TopRatedPage(props) {
  let params = useParams();
  const navigate = useNavigate()
  const [pageNumber, setPageNumber] = useState(1);
  useEffect( ()=>{
    if (
      props.pageNumber !== undefined &&
      !isNaN(parseInt(props.pageNumber)) &&
      parseInt(props.pageNumber) > 0
    ) {
      setPageNumber(parseInt(props.pageNumber));
    } else if (
      params.pageNumber !== undefined &&
      !isNaN(parseInt(params.pageNumber)) &&
      parseInt(params.pageNumber) > 0
    ) {
      setPageNumber(parseInt(params.pageNumber));
    } else {
      setPageNumber(1);
    }
  },[params,props])

  return (
    <div>
      <h2>Top Rated Movies</h2>
      <div id='pagination' style={{
        height:'100px',
        display:'flex',
        justifyContent:'space-evenly',
        alignItems:'center',
        fontFamily:"'Times New Roman',Georgia,Serif"
        }}>
        <Button variant="outline-primary" onClick={()=>{
          if(pageNumber > 1) {setPageNumber(pageNumber-1);
          navigate(`/top_rated/${pageNumber-1}`);}
        }}>Prev</Button>
        <span style={{fontSize:'x-large'}}>{`Top Rated Movies Page ${pageNumber} of 517`}</span>
        <Button variant="outline-success" onClick={()=>{
          navigate(`/top_rated/${pageNumber+1}`);
          setPageNumber(pageNumber+1);
        }}>Next</Button>
      </div>
      <ConnectList pageNumber={pageNumber} />
    </div>
  );
}