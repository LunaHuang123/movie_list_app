import Modal from 'react-bootstrap/Modal';
import DetailPage from './detail_page';
import PropTypes from 'prop-types';
function MovieModal(props) {
  const {showOption, setShow} = props;
  const handleClose = () => setShow({...showOption,show:false});
  //Don't set movieID to null when you close the modal, keep it as previous one, otherwise it will cause a meaningless 404 request
  return (
    <>
      <Modal show={showOption.show} onHide={handleClose} fullscreen={true}>
        <Modal.Header style={{backgroundColor:'rgb(33,37,41)',color:'white',border:'0'}} closeButton closeVariant={'white'}>
          <Modal.Title>Movie Details</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{objectFit:'contain',padding:'0px'}}>
          <DetailPage movieID={showOption.movieID}/>
        </Modal.Body>
      </Modal>
    </>
  );
}
MovieModal.propTypes = {
  showOption: PropTypes.object,
  setShow: PropTypes.func
}
export default MovieModal;