import React from "react";

export default function Footer() {
  return (
<footer className="section footer-classic context-dark bg-image" style={{background: '#2d3246'}}>
  <div className="container text-white">
    <div className="row row-30 fixed">
      <div className="col-md-4 col-xl-5 justify-content-center text-center">
        <div className="pr-xl-4"><a className="brand" href="index.html"><img className="brand-logo-light mt-1" src="https://tix.vn/app/assets/img/icons/web-logo.png" alt="" width={40} height={40}  />
          </a>
          <h6 className="text-white mt-3">TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</h6>
          <p>We are an award-winning creative agency, dedicated to the best result in web design, promotion, business consulting, and marketing. </p>
        </div>
      </div>
      <div className="col-md-4 ">
        <h5>Contacts</h5>
        <dl className="contact-list">
          <dt>Address:</dt>
          <dd>279 Nguyễn Trí Phương, Quận 10, TPHCM</dd>
        </dl>
        <dl className="contact-list">
          <dt>Email:</dt>
          <dd><a href="mailto:#">bookingmovie123@gmail.com</a></dd>
        </dl>
        <dl className="contact-list">
          <dt>Phones:</dt>
          <dd><a href="tel:#">0945638888</a> <br/> <a href="tel:#">(028) 37568834</a>
          </dd>
        </dl>
      </div>
      <div className="col-md-4 col-xl-3"> 
        <h5>Links</h5>
        <ul className="nav-list ml-2">
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Brand Guidelines</a></li>
          <li><a href="#">Thoả thuận sử dụng</a></li>
          <li><a href="#">Chính sách bảo mật</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div className="row no-gutters social-container">
    <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-facebook" /><span>Facebook</span></a></div>
    <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-instagram" /><span>instagram</span></a></div>
    <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-twitter" /><span>twitter</span></a></div>
    <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-youtube-play" /><span>google</span></a></div>
  </div>
</footer>

  );
}
