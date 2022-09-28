import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';
function Pagination(props){
    const navigate = useNavigate();
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
            <span style={{fontSize:'x-large'}}>{`Page ${props.pageNumber} of 500`}</span>
            <Button variant="outline-primary" onClick={()=>{
            navigate(`/${props.pageRouteType}/${props.pageNumber+1}`);
            }}>Next</Button>
        </div>
    )
}
export default Pagination;