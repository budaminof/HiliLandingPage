import React, { Component } from 'react';

const Middle = (props) => {
  return (
    <article className="middle" id="dentro">


    <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">

      <ol className="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
      </ol>


      <div className="carousel-inner" role="listbox">
        <div className="item active">
          <img src="/images/brash2.jpg" alt=""></img>
        </div>
        <div className="item">
          <img src="/images/glove.png" alt=""></img>
        </div>
      </div>


      <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>


      <aside className="col-md-4 col-sm-6 col-xs-10">
        <h1 className="page-header">מה אנו עושים</h1>
        <p>
          רצפת דק היא ללא ספק תוספת מרשימה ומזמינה מאד לגינות ושטחים פתוחים, פיתרון מרהיב ביופיו המספק אוירה חמימה ונעימה. הדק כולל לוחות עץ המורכבים על גבי קורות עץ או מתכת, כך שבדיוק בגלל המאפיינים שהופכים הדק למרשים ודקורטיבי כל כך הוא גם דורש תחזוקה.
        </p>
        <p className="page-header">
          בסיום התהליך של חידוש דקים הוא יראה כמו חדש ולא תאמינו שזהו אותו דק - בהתחייבות שלנו! על מנת להגיע לתוצאות אופטימאליות של צביעת דק וחידושו יש להכיר את סוגי העץ השונים, כיצד כל עץ מתנהג וכיצד תנאי הסביבה משפיעים עליו. רק כך צביעת דק וחידוש מקצועי של הדק יכול לספק תוצאות מעולות וארוכות טווח.
        </p>
      </aside>
    </article>
  );
}

export default Middle;
