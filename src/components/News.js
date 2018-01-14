import React, { Component } from 'react'
import { formattedDate } from '../commons/functions';
import NewsModal from './NewsModal';
import '../styles/News.css';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal = () => {

    this.setState({ showModal: true });
  }
  closeModal = () => {

    this.setState({ showModal: false });
  }

  render() {
    const { showModal } = this.state;
    const { snippet, source, multimedia, pubDate } = this.props;
    const cover = multimedia.find(elem => elem.subtype === "wide");
    const modalCover = multimedia.find(elem => elem.subtype === "xlarge");
    return (
      <div className="col-sm-12 no-padding News">
        <NewsModal
          showModal={showModal}
          closeModal={this.closeModal}
          cover={modalCover}
          source={source}
          pubDate={pubDate}
          snippet={snippet}
        />
        <div className="col-sm-12 no-padding news-container" onClick={this.openModal}>
          <div className="card inline-block">
            {
              (cover && cover.url)
                ? <img className="card-img-top" src={`https://static01.nyt.com/${cover.url}`} alt="image" width="100%" height="200px" />
                : null
            }
            <div className="card-block">
              <small className="card-title">{source}</small> <br />
              <small className="card-subtitle mb-2 text-muted">{formattedDate(pubDate)}</small>
              <p className="card-text news-snippet">{snippet}</p>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default News