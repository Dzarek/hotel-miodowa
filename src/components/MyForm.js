import React, { Component } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
// import Cookie from "./CookiePage";
import { NavLink } from "react-router-dom";

class MyForm extends Component {
  state = {
    status: "",
  };
  sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d3t62hr",
        "template_7efmahi",
        e.target,
        "user_hMGLIzZtMljfB9Ssj5uYj"
      )
      .then(
        () => {
          e.target.reset();
          this.setState({ status: "SUCCESS" });
        },
        () => {
          this.setState({ status: "ERROR" });
        }
      );
  };
  render() {
    const { status } = this.state;
    const { polish } = this.props;
    return (
      <>
        <Wrapper onSubmit={this.sendEmail}>
          <h1>
            {polish
              ? "Jeśli chcesz dokonać rezerwacji lub masz jakieś pytania, śmiało napisz do nas!"
              : "If you want to make a reservation or have any questions, feel free to write to us!"}
          </h1>
          <div className="inputContainer">
            <input
              type="text"
              name="name"
              placeholder={polish ? "Imię i nazwisko" : "Your name"}
              required
            />
            <input type="email" name="email" placeholder="E-mail" required />
          </div>
          <br />
          <textarea
            placeholder={polish ? "Twoja wiadomość..." : "Your message"}
            name="message"
            required
          ></textarea>
          <div className="labelCookieContainer">
            <label className="labelCheck" htmlFor="accept">
              <p>
                <input type="checkbox" id="accept" name="accept" required />
                {polish
                  ? "Wyrażam zgodę na przetwarzanie danych osobowych w celu odpowiedzi na mojego e-maila."
                  : "I agree to the processing of my personal data in order to answer my e-mail."}
                <NavLink
                  onClick={() => this.setState({ cookieVisible: true })}
                  to="/kontakt/rodo&cookies"
                  smooth={true}
                  duration={1000}
                  className="cookieLink"
                >
                  {polish ? "(Polityka Prywatności)" : "(Privacy Policy)"}
                </NavLink>
              </p>
            </label>
          </div>
          {polish ? (
            <>
              {status === "SUCCESS" ? (
                <p style={{ fontSize: "30px" }}>Wiadomość wysłana! </p>
              ) : (
                <button>Wyślij</button>
              )}
              {status === "ERROR" && (
                <p style={{ fontSize: "30px" }}>ups... coś poszło nie tak!</p>
              )}
            </>
          ) : (
            <>
              {status === "SUCCESS" ? (
                <p style={{ fontSize: "30px" }}>Message was sent! </p>
              ) : (
                <button>Send</button>
              )}
              {status === "ERROR" && (
                <p style={{ fontSize: "30px" }}>ups... something wrong!</p>
              )}
            </>
          )}
        </Wrapper>
        {/* {this.state.cookieVisible && (
          <WrapperModal id="cookie">
            <button
              className="btnCloseCookie"
              onClick={() => this.setState({ cookieVisible: false })}
            >
              <IoCloseCircle />
            </button>
          </WrapperModal>
        )} */}
      </>
    );
  }
}
const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: white;
  height: 66vh;
  width: 90%;
  margin: 0 auto;
  @media (orientation: portrait) and (max-width: 800px) {
    width: 100%;
    height: auto;
  }
  h1 {
    text-align: center;
    margin: 0 auto;
    margin-bottom: 5vh;
    font-family: var(--buttonFont);
    width: 80%;
    @media (orientation: portrait) and (max-width: 800px) {
      font-size: 1.5rem;
      width: 90%;
    }
  }
  .inputContainer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    input {
      border-radius: 5px;
      width: 45%;
      padding: 10px 20px;
      font-size: 1rem;
      background: #111;
      border: 2px solid var(--secondaryColor2);
      color: white;
      font-family: var(--textFont);
      @media screen and (max-width: 800px) {
        font-size: 1rem;
        width: 47%;
        padding: 8px 10px;
      }
    }
  }
  textarea {
    width: 100%;
    min-height: 30vh;
    padding: 20px 20px;
    border-radius: 5px;
    font-size: 1rem;
    background: #111;
    border: 2px solid var(--secondaryColor2);
    color: white;
    font-family: var(--textFont);
    line-height: 1.2;
    @media screen and (max-width: 800px) {
      font-size: 1rem;
      padding: 8px 10px;
      min-height: 30vh;
    }
  }
  .labelCookieContainer {
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-family: var(--textFont);
    font-size: 1rem;
    line-height: 1.2;
    label {
      margin: 3vh auto 0;
      @media (orientation: portrait) and (max-width: 800px) {
        font-size: 0.9rem;
      }
      input {
        margin-right: 10px;
        cursor: pointer;
      }
    }
    .cookieLink {
      color: var(--secondaryColor2);
      cursor: pointer;
      margin-left: 5px;
    }
  }
  button {
    width: 30%;
    font-size: 1.1rem;
    padding: 10px 0;
    background: transparent;
    color: white;
    letter-spacing: 1px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.5s;
    border: 2px solid var(--bookBtnColor);
    margin-top: 3vh;
    font-family: var(--buttonFont);
    :hover {
      background: var(--bookBtnColor);
    }
    @media screen and (max-width: 800px) {
      width: 50%;
      background: rgb(197, 103, 40);
    }
  }
`;

export default MyForm;
