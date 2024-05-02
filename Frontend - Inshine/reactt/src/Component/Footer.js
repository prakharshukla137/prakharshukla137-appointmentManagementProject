import React from "react";
import "../Css/Style.css";

export default function Footer() {
  return (
    <div class="footer">
      <div className="footer">
        {/* <div class="row row-cols-1 row-cols-md-3 g-4"> */}
          <div class="col">
            <span style={{ fontSize: "12px" }} />
            <ul className="list-inline text-center mb-4 mt-4 foot_social">
              <li
                className="list-inline-item mx-2"
                data-toggle="tooltip"
                data-placement="top"
                title
                data-original-title="Facebook"
              >
                <a
                  className="text-dark"
                  target="_blank"
                  href="https://facebook.com/"
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: "26px",
                      height: "19px",
                      background:
                        "url(https://www.homesalon.in/front/assets/img/f8ea2ae2.png) -262px -46px",
                    }}
                  />
                </a>
              </li>
              <li
                className="list-inline-item mx-2"
                data-toggle="tooltip"
                data-placement="top"
                title
                data-original-title="Instagram"
              >
                <a
                  className="text-dark"
                  target="_blank"
                  href="https://twitter.com/"
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: "26px",
                      height: "19px",
                      background:
                        "url(https://www.homesalon.in/front/assets/img/f8ea2ae2.png) -160px -130px",
                    }}
                  />
                </a>
              </li>
              <li
                className="list-inline-item mx-2"
                data-toggle="tooltip"
                data-placement="top"
                title
                data-original-title="Twitter"
              >
                <a
                  className="text-dark"
                  target="_blank"
                  href="https://www.instagram.com/"
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: "26px",
                      height: "19px",
                      background:
                        "url(https://www.homesalon.in/front/assets/img/f8ea2ae2.png) -50px -196px",
                    }}
                  />
                </a>
              </li>
              <li
                className="list-inline-item mx-2"
                data-toggle="tooltip"
                data-placement="top"
                title
                data-original-title="Dribbble"
              >
                <a
                  className="text-dark"
                  target="_blank"
                  href="https://wa.me/"
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: "26px",
                      height: "19px",
                      background:
                        "url(https://www.homesalon.in/front/assets/img/f8ea2ae2.png) -10px -196px",
                    }}
                  />
                </a>
              </li>
              <li
                className="list-inline-item mx-2"
                data-toggle="tooltip"
                data-placement="top"
                title
                data-original-title="Dribbble"
              >
                <a
                  className="text-dark"
                  target="_blank"
                  href="https://youtube.com/"
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: "26px",
                      height: "19px",
                      background:
                        "url(https://www.homesalon.in/front/assets/img/f8ea2ae2.png) -114px -130px",
                    }}
                  />
                </a>
              </li>
            </ul>

            <div className="row">
              <p>
                <h6>Phone-No: 9399125462</h6>
              </p>
              {/* <p>
                <h6>Timings: Monday-Friday</h6>
              </p> */}
              <p>
                <h6>© 2023 by Beauty & Co. Powered and secured by Inshine</h6>
              </p>
            </div>
          </div>
         
      </div>
    </div>
  );
}
