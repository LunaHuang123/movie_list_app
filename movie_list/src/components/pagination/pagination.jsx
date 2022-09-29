import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import STATUS_TYPE from '../../reducers/statusTypes';
function Pagination(props){
    const navigate = useNavigate();
    const total_pages = useSelector((state) => {
        if(state.topRatedPage.cachedPages[1] && state.topRatedPage.cachedPages[1].status === STATUS_TYPE.success){
            return state.topRatedPage.cachedPages[1].data.total_pages;
        }
        else if(state.topRatedPage.cachedPages[props.pageNumber] && state.topRatedPage.cachedPages[props.pageNumber].status === STATUS_TYPE.success){
            return state.topRatedPage.cachedPages[props.pageNumber].data.total_pages;
        }
        else return '';
    });
    return(
        <div id='pagination' style={{
            height:'100px',
            display:'flex',
            justifyContent:'space-evenly',
            alignItems:'center',
            fontFamily:"'Times New Roman',Georgia,Serif"
            }}>
            <Button variant="outline-primary" onClick={()=>{
            if(props.pageNumber > 1) {
            navigate(`/${props.pageRouteType}/${props.pageNumber-1}`);}
            }}>Prev</Button>
            <span style={{fontSize:'x-large'}}>{`Page ${props.pageNumber} of ${total_pages}`}</span>
            <Button variant="outline-primary" onClick={()=>{
            navigate(`/${props.pageRouteType}/${props.pageNumber+1}`);
            }}>Next</Button>
        </div>
    )
}

export default Pagination;