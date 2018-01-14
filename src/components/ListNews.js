import React, { Component } from 'react'
import News from './News';
class ListNews extends Component {
  renderCol(news, first, last) {
    return news.slice(first, last).map((elem) => {
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
  render() {
    const { news } = this.props;
    const col1 = this.renderCol(news, 0, 3);
    const col2 = this.renderCol(news, 3, 6);
    const col3 = this.renderCol(news, 6, 8);
    const col4 = this.renderCol(news, 8, news.length);
    return (
      <div className="row ListNews">
        <div className="col-xs-6 col-sm-3 padding-5">
          {col1}
        </div>
        <div className="col-xs-6 col-sm-3 padding-5">
          {col2}
        </div>
        <div className="col-xs-6 col-sm-3 padding-5">
          {col3}
        </div>
        <div className="col-xs-6 col-sm-3 padding-5">
          {col4}
        </div>
      </div>
    )
  }
}

export default ListNews