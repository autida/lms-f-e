import { useState } from "react";
import LoginModal from "./modals/LoginModal";

const Content = () => {
  // [getter, setter]
  const [token, setToken] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  //create a function to open the modal
  const modalOpen = () => {
    setIsModalOpen(true);
  };

  //create a function to close the modal
  const modalClose = () => {
    setIsModalOpen(false);
  };
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
                    ante mollis scelerisque. Integer sit amet efficitur sem.
                    Curabitur vehicula accumsan arcu a congue. Nam et
                    consectetur eros. Sed a ligula a justo condimentum
                    hendrerit. Vestibulum sed justo condimentum, finibus justo
                    vel, pharetra dui. Suspendisse ut elementum erat. Quisque
                    mollis venenatis tempus. Integer euismod justo ut libero
                    sagittis condimentum. Donec sit amet elit nisl. Nunc ut
                    tortor ipsum. Sed consectetur erat ac facilisis vestibulum.
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
                    ante mollis scelerisque. Integer sit amet efficitur sem.
                    Curabitur vehicula accumsan arcu a congue. Nam et
                    consectetur eros. Sed a ligula a justo condimentum
                    hendrerit. Vestibulum sed justo condimentum, finibus justo
                    vel, pharetra dui. Suspendisse ut elementum erat. Quisque
                    mollis venenatis tempus. Integer euismod justo ut libero
                    sagittis condimentum. Donec sit amet elit nisl. Nunc ut
                    tortor ipsum. Sed consectetur erat ac facilisis vestibulum.
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
                    ante mollis scelerisque. Integer sit amet efficitur sem.
                    Curabitur vehicula accumsan arcu a congue. Nam et
                    consectetur eros. Sed a ligula a justo condimentum
                    hendrerit. Vestibulum sed justo condimentum, finibus justo
                    vel, pharetra dui. Suspendisse ut elementum erat. Quisque
                    mollis venenatis tempus. Integer euismod justo ut libero
                    sagittis condimentum. Donec sit amet elit nisl. Nunc ut
                    tortor ipsum. Sed consectetur erat ac facilisis vestibulum.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-button">
            {token ? (
              <button className="btn content-btn"> Go To Dashboard</button>
            ) : (
              <button onClick={modalOpen} className="btn content-btn">
                Login
              </button>
            )}
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
