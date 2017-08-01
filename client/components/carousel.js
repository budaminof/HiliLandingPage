import React, { Component } from 'react';

const Carousel = (props) => {
  return (
    <div className="carousel">

      <div id="carousel" className="carousel slide"
        data-ride="carousel"
        data-interval="3000"
        data-pause="null">

        <ol className="carousel-indicators">
          <li data-target="#carousel" data-slide-to="0" className="active"></li>
          <li data-target="#carousel" data-slide-to="1"></li>
          <li data-target="#carousel" data-slide-to="2"></li>
          <li data-target="#carousel" data-slide-to="3"></li>
          <li data-target="#carousel" data-slide-to="4"></li>
        </ol>

        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <img src="/images/test1.jpg" alt="" className=""></img>
          </div>
          <div className="item">
            <img src="/images/test4.jpg" alt="" className=""></img>
          </div>
          <div className="item">
            <img src="/images/test2.jpg" alt="" className=""></img>
          </div>
          <div className="item">
            <img src="/images/test3.jpg" alt="" className=""></img>
          </div>
          <div className="item">
            <img src="/images/test5.jpg" alt="" className=""></img>
          </div>
        </div>


        <a className="left carousel-control" href="#carousel" role="button" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#carousel" role="button" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

    </div>
  );
}

export default Carousel;
