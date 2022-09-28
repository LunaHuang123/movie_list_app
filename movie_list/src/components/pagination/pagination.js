function Pagination(props){
    return(
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
            <span style={{fontSize:'x-large'}}>{`Page ${pageNumber} of 517`}</span>
            <Button variant="outline-primary" onClick={()=>{
            navigate(`/top_rated/${pageNumber+1}`);
            setPageNumber(pageNumber+1);
            }}>Next</Button>
        </div>
    )
}
export default Pagination;