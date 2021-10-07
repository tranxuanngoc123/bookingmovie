import React from "react";

export default function Header(props) {
  const headerStyle = {
    position: "fixed",
    backgroundColor: "black"
  }
  return (
    <header className="fixed w-100 ">
      <nav class="navbar navbar-expand-lg navbar-bg-white">
        <a class="navbar-brand mx-3 ml-5" href="#">
          <img
            src="https://tix.vn/app/assets/img/icons/web-logo.png"
            style={{ width: "40px", height: "40px" }}
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto h-16 mx-auto">
            <li class="nav-item text-black">
              <a class="nav-link ml-5" href="#">
                Lịch Chiếu
              </a>
            </li>
            <li class="nav-item ml-5">
              <a class="nav-link" href="#">
                Cụm Rạp
              </a>
            </li>
            <li class="nav-item ml-5">
              <a class="nav-link" href="#">
                Tin Tức
              </a>
            </li>
           
          </ul>
          <div>
            <a href="#" className="menu titleDisplay " class="navbar-light bg-light">
              <p
                className="white my-2 my-sm-0 mr-5 "
                // style={{ display: "inline-block" }}
              >
                Đăng Nhập
              </p>
            </a>
            
          </div>
        </div>
      </nav>
    </header>
  );
}
