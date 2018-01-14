import React, { Component } from 'react';
import Pagination from "react-js-pagination/dist/Pagination";
import News from './News';
import ListNews from './ListNews';
import Header from './shareComponents/Header';
import Footer from './shareComponents/Footer';
import '../styles/App.css';
const PAGE_SIZE = 10;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    }
  }
  componentDidMount() {
    this.props.fetchNews(0);
  }
  renderNews(propNews) {
    return propNews.map((elem) => {
      return (
        <News
          key={elem._id}
          snippet={(elem.snippet) ? elem.snippet : ""}
          pubDate={(elem.pub_date) ? elem.pub_date : ""}
          source={(elem.source) ? elem.source : ""}
          multimedia={(elem.multimedia) ? elem.multimedia : []}
        />
      )
    })
  }
  renderPagination(meta) {
    try {
      return (
        <div className="col-sm-12 text-center">
          <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={PAGE_SIZE}
            totalItemsCount={meta.hits}
            pageRangeDisplayed={5}
            innerClass="news-pagination"
            itemClass="news-pagination-li"
            activeClass="news-pagination-li-active"
            firstPageText="First"
            lastPageText="Last"
            prevPageText="Prev"
            nextPageText="Next"
            onChange={(e) => this.handlePageChange(e)}
          />
        </div>
      )
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.props.fetchNews(pageNumber - 1);
    this.setState({ activePage: pageNumber }, () => window.scrollTo(0, 0));
  }
  render() {
    const { news } = this.props;
    if (!news) return <div>Not Found.</div>
    if (news.length === 0) return <div>Loading...</div>
    return (
      <div className="App">
        <Header />
        <div className="push"></div>
        <div className="container-fluid">
          <ListNews news={news.docs} />

          <div className="row">
            {this.renderPagination(news.meta)}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
