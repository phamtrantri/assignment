
import React, { Component } from 'react'
import Modal from 'react-modal';
import { formattedDate } from '../commons/functions';
import '../styles/Modal.css';
const customStyles = {
  content: {
    bottom: 'auto',
    minHeight: '10rem',
    left: '50%',
    padding: '2rem',
    position: 'fixed',
    right: 'auto',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    minWidth: '20rem',
    //width: '80%',
    maxWidth: '60rem'
  }
};
class NewsModal extends Component {
  render() {
    const { showModal, closeModal, source, cover, pubDate, snippet } = this.props;
    return (
      <Modal
        ariaHideApp={false}
        isOpen={showModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        {
          (cover && cover.url)
            ? <img className="card-img-top" src={`https://static01.nyt.com/${cover.url}`} alt="image" width="100%" height="200px" />
            : null
        }
        <small className="modal-source">{source}</small>
        <p className="modal-pub-date">{formattedDate(pubDate)}</p>
        <p className="modal-snippet">{snippet}</p>
        <button className="btn btn-default" onClick={closeModal}>Back</button>
      </Modal>
    )
  }
}

export default NewsModal
