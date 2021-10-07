import React from "react";

const contentStyle = {
  
  height: "500px",
  color: "#ccc",
  lineHeight: "400px",
  textAlign: "center",
  background: "#fff",
  
};
export default function HomeCarousel() {
  return (
    <div className="container mt-1 ">
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to={0} className="active" />
          <li data-target="#myCarousel" data-slide-to={1} />
          <li data-target="#myCarousel" data-slide-to={2} />
        </ul>
        <div className="carousel-inner" style={contentStyle }>
          <div className="carousel-item active" s>
            <img
              src="https://i.pinimg.com/474x/95/e9/19/95e919c43e474443788e1b77963ea71d.jpg"
              alt="Los Angeles"
              style={{width: '1100px', height: '500px'}}
            />
          </div>
          <div className="carousel-item" style={contentStyle}>
            <img
              src="https://i.pinimg.com/564x/55/d0/19/55d01942aed27e0a19320a82a57f07db.jpg"
              alt="Chicago"
              width={1100}
              height={500}
            />
          </div>
          <div className="carousel-item" style={contentStyle}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI7iRBRALmsBB0efDMaqIM14uNe1v2x29C6g&usqp=CAU"
              alt="New York"
              width={1100}
              height={500}
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#myCarousel"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" />
        </a>
        <a
          className="carousel-control-next"
          href="#myCarousel"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" />
        </a>
      </div>
    </div>
  );
}
