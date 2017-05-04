import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';


class Head extends Component {

  handleScroll(event) {
    let anchor = document.getElementById('dentro');
    scrollToComponent(anchor);
  }

  render() {
    return (
      <article className="top" id="top">

        <div className="social">
          <a><img src="/images/twitter.png"/></a>
          <a><img src="/images/instagram.png"/></a>
          <a><img src="/images/facebook.png"/></a>
        </div>

        <img src="/images/logo.png" className="logo-top"/>
        <img src="/images/stamp.png" className="stamp"/>

        <aside className="col-md-4 col-sm-6 col-xs-10">
            <h1>אומנות החידוש והשימור</h1>
            <p>
              דנטרו היא חברה ייעודית המתמחה בחידוש דקים ורסטורציה ברף האיכות הגבוה ביותר בתחום מבחינת ידע, מקצועיות, חדשנות, טכנולוגיה וחומרים באיכות הגבוהה ביותר.
            </p>
        </aside>
        <button>
          <a className="page-scroll" onClick={event => this.handleScroll(event) }>
            <img src="/images/arrow.png" className="arrow"/>
          </a>
        </button>

      </article>
    );
  }
}

export default Head;
