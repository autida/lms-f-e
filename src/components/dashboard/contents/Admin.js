import React from "react";
import Logout from "../../Logout";
import "./content.css";

const Admin = () => {
  return (
    <>
      <div className="header">
        <h2>Reviewer Dashboard</h2>
        <section className="student-sec">
          <a href="/">Logout</a>
        </section>
      </div>
      <section>
        <div className="content-auth">
          <div className="row content-body-auth">
            <h4>In Review</h4>
            <div className="col-md-4">
              <div className="content-card">
                <div className="card">
                  <div className="card-body">
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce sed urna nec odio ultrices eleifend.
                    </p>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-success">Edit</button>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-md-4">
              <div className="content-card">
                <div className="card">
                  <div className="card-body">
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce sed urna nec odio ultrices eleifend.
                    </p>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-success">Edit</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="content-card">
                <div className="card">
                  <div className="card-body">
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce sed urna nec odio ultrices eleifend.
                    </p>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-success">Edit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="content-auth">
          <div className="row content-body-auth">
            <h4>Submitted for Review | Resubmitted</h4>
            <div className="col-md-4">
              <div className="content-card">
                <div className="card">
                  <div className="card-body">
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce sed urna nec odio ultrices eleifend.
                    </p>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-success">Edit</button>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-md-4">
              <div className="content-card">
                <div className="card">
                  <div className="card-body">
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce sed urna nec odio ultrices eleifend.
                    </p>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-success">Edit</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="content-card">
                <div className="card">
                  <div className="card-body">
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce sed urna nec odio ultrices eleifend.
                    </p>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-success">Edit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="in-review">
        <div className="content-auth">
          <div className="row content-body-auth">
            <h4>Completed</h4>
            <div className="col-md-4">
              <div className="content-card">
                <div className="card">
                  <div className="card-body">
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce sed urna nec odio ultrices eleifend.
                    </p>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-success">Edit</button>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-md-4">
              <div className="content-card">
                <div className="card">
                  <div className="card-body">
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce sed urna nec odio ultrices eleifend.
                    </p>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-success">Edit</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="content-card">
                <div className="card">
                  <div className="card-body">
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce sed urna nec odio ultrices eleifend.
                    </p>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-success">Edit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admin;
