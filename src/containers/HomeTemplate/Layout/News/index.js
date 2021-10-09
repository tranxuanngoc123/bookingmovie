import React from "react";

export default function New() {
  return (
    <div className="container">
      <h1 class="pb-3 mb-4 text-center mt-4">Tin tức</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card flex-md-row mb-4 shadow-sm h-md-250">
            <div className="card-body d-flex flex-column align-items-start">
              <strong className="d-inline-block mb-2 text-primary">
                World
              </strong>
              <h6 className="mb-0">
                <a className="text-dark" href="#">
                  40 Percent of People Can’t Afford Basics
                </a>
              </h6>
              <div className="mb-1 text-muted small">Nov 12</div>
              <p className="card-text mb-auto">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </p>
              <a
                className="btn btn-outline-primary btn-sm"
                role="button"
                href="http://www.jquery2dotnet.com/"
              >
                Read more
              </a>
            </div>
            <img
              className="card-img-right flex-auto d-none d-lg-block"
              alt="Thumbnail [200x250]"
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ladyhawke-warnerbros-1531418540.jpg?crop=1xw:1xh;center,top&resize=980:*"
              style={{ width: 200, height: 250 }}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="card flex-md-row mb-4 shadow-sm h-md-250">
            <div className="card-body d-flex flex-column align-items-start">
              <strong className="d-inline-block mb-2 text-success">
                Health
              </strong>
              <h6 className="mb-0">
                <a className="text-dark" href="#">
                  Food for Thought: Diet and Brain Health
                </a>
              </h6>
              <div className="mb-1 text-muted small">Nov 11</div>
              <p className="card-text mb-auto">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </p>
              <a
                className="btn btn-outline-success btn-sm"
                href="http://www.jquery2dotnet.com/"
              >
                Read more
              </a>
            </div>
            <img
              className="card-img-right flex-auto d-none d-lg-block"
              alt="Thumbnail [200x250]"
              src="https://img.buzzfeed.com/buzzfeed-static/static/2015-02/20/16/enhanced/webdr03/enhanced-10670-1424466857-15.jpg?crop=556:834;17,0&downsize=300:*&output-format=auto&output-quality=auto"
              style={{ width: 200, height: 250 }}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="card flex-md-row mb-4 shadow-sm h-md-250">
            <div className="card-body d-flex flex-column align-items-start">
              <strong className="d-inline-block mb-2 text-success">
                Người sói
              </strong>
              <h6 className="mb-0">
                <a className="text-dark" href="#">
                  Food for Thought: Diet and Brain Health
                </a>
              </h6>
              <div className="mb-1 text-muted small">Nov 11</div>
              <p className="card-text mb-auto">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </p>
              <a
                className="btn btn-outline-success btn-sm"
                href="http://www.jquery2dotnet.com/"
              >
                Read more
              </a>
            </div>
            <img
              className="card-img-right flex-auto d-none d-lg-block"
              alt="Thumbnail [200x250]"
              src="https://img.buzzfeed.com/buzzfeed-static/static/2015-02/20/16/enhanced/webdr03/enhanced-10670-1424466857-15.jpg?crop=556:834;17,0&downsize=300:*&output-format=auto&output-quality=auto"
              style={{ width: 200, height: 250 }}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="card flex-md-row mb-4 shadow-sm h-md-250">
            <div className="card-body d-flex flex-column align-items-start">
              <strong className="d-inline-block mb-2 text-primary">
                World
              </strong>
              <h6 className="mb-0">
                <a className="text-dark" href="#">
                  40 Percent of People Can’t Afford Basics
                </a>
              </h6>
              <div className="mb-1 text-muted small">Nov 12</div>
              <p className="card-text mb-auto">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </p>
              <a
                className="btn btn-outline-primary btn-sm"
                role="button"
                href="http://www.jquery2dotnet.com/"
              >
                Read more
              </a>
            </div>
            <img
              className="card-img-right flex-auto d-none d-lg-block"
              alt="Thumbnail [200x250]"
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ladyhawke-warnerbros-1531418540.jpg?crop=1xw:1xh;center,top&resize=980:*"
              style={{ width: 200, height: 250 }}
            />
          </div>
        </div>
      </div>
      <button
        className="btn btn-light"
        type="button"
        style={{
          color: "red",
          marginLeft: "auto",
          marginRight: "auto",
          display: "block",
          marginTop: "1",
          marginBottom: "0%",
        }}
      >
       Read More
      </button>
    </div>
  );
}
