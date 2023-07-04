import { useState, useEffect } from "react";
import LoginModal from "./modals/LoginModal";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Content = () => {
  // [getter, setter]
  let [token, setToken] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const authCred = useAuth();
  const navigate = useNavigate();

  //create a function to open the modal
  const modalOpen = () => {
    setIsModalOpen(true);
  };

  //create a function to close the modal
  const modalClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setToken(authCred.auth.accessKey);
  }, []);
  console.log("test" + token);
  return (
    <>
      <div className="content">
        <div className="row content-body">
          <div className="col-md-4">
            <div className="content-card ">
              <div className="card">
                <div className="card-header">
                  <span className="card-title"> What is ARA?</span>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce sed urna nec odio ultrices eleifend. Aliquam erat
                    volutpat. Sed sed dapibus ligula, vel efficitur mi. Maecenas
                    lobortis posuere odio id bibendum. Praesent at mauris ut
                    ante mollis scelerisque.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-md-4">
            <div className="content-card">
              <div className="card">
                <div className="card-header">
                  <span className="card-title">Why is it important?</span>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce sed urna nec odio ultrices eleifend. Aliquam erat
                    volutpat. Sed sed dapibus ligula, vel efficitur mi. Maecenas
                    lobortis posuere odio id bibendum. Praesent at mauris ut
                    ante mollis scelerisque.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="content-card">
              <div className="card">
                <div className="card-header">
                  <span className="card-title">What are the benefits?</span>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce sed urna nec odio ultrices eleifend. Aliquam erat
                    volutpat. Sed sed dapibus ligula, vel efficitur mi. Maecenas
                    lobortis posuere odio id bibendum. Praesent at mauris ut
                    ante mollis scelerisque.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-button">
            {authCred.auth.accessKey ? (
              <button
                onClick={() => navigate("/dashboard")}
                className="btn content-btn"
              >
                Go To Dashboard
              </button>
            ) : (
              <button onClick={modalOpen} className="btn content-btn">
                Login
              </button>
            )}
            {/* <button onClick={modalOpen} className="btn content-btn">
              Login
            </button> */}
          </div>
        </div>
      </div>
      <LoginModal isOpen={isModalOpen} onClose={modalClose}>
        {/* Modal content goes here */}
      </LoginModal>
    </>
  );
};

export default Content;
