import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';


class Head extends Component {

  handleScroll(event) {
    let anchor = document.getElementById('carousel');
    scrollToComponent(anchor, {
      align: 'top',
    });
  }

  render() {
    return (
      <article className="top" id="top">

        <div className="social">
          <div>Icons made by <a href="https://www.flaticon.com/authors/zurb" title="Zurb">Zurb</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
          <a href="tel:+97253395986"><img src="/images/phone2.png"/><span> צור קשר</span></a>
        </div>

        <img src="/images/logo-top.png" className="logo-top"/>

        <aside className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12">
            <h1>אומנות החידוש והשימור</h1>
            <p>
              דנטרו היא חברה ייעודית המתמחה בחידוש דקים ורסטורציה ברף האיכות הגבוה ביותר בתחום מבחינת ידע, מקצועיות, חדשנות, טכנולוגיה וחומרים באיכות הגבוהה ביותר.
            </p>
          <button>
            <a className="page-scroll" onClick={event => this.handleScroll(event) }>
              <img src="/images/arrow.png" className="arrow"/>
            </a>
          </button>
        </aside>

      </article>
    );
  }
}

export default Head;
