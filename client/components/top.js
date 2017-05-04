import React, { Component } from 'react';

class Head extends Component {

  render() {
    return (
      <article className="top">

        <div className="social">
          <img src="/images/twitter.png"/>
          <img src="/images/instagram.png"/>
          <img src="/images/facebook.png"/>
        </div>

        <img src="/images/logo.png" className="logo-top"/>
        <img src="/images/stamp.png" className="stamp"/>

        <aside className="col-md-4 col-xs-10">
            <h1>אומנות החידוש והשימור</h1>
            <p>
              דנטרו היא חברה ייעודית המתמחה בחידוש דקים ורסטורציה ברף האיכות הגבוה ביותר בתחום מבחינת ידע, מקצועיות, חדשנות, טכנולוגיה וחומרים באיכות הגבוהה ביותר.
            </p>
        </aside>
        <button>
          <a>
            <img src="/images/arrow.png" className="arrow"/>
          </a>
        </button>

      </article>
    );
  }
}

export default Head;
