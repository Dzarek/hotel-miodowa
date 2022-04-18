import { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { RoomContext } from "../roomContext";

const MyForm2 = () => {
  const context = useContext(RoomContext);
  const { polish } = context;
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [box, setBox] = useState(false);

  const handleWowSubmit = async (e) => {
    e.preventDefault();
    await fetch("https://formsubmit.co/ajax/rezerwacja@hotelmiodowa.pl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        nadawca: name,
        email: email,
        wiadomość: text,
        _template: "box",
        _subject: `hotelmiodowa.pl, wiadomość od ${name}`,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setStatus("SUCCESS");
        } else {
          setStatus("ERROR");
        }
      })
      .catch((error) => console.log(error));
    setTimeout(() => {
      setStatus("");
      setName("");
      setEmail("");
      setText("");
      setBox(false);
    }, 3000);
  };

  return (
    <>
      <Wrapper onSubmit={(e) => handleWowSubmit(e)}>
        <h2>
          {polish
            ? "Jeśli chcesz dokonać rezerwacji lub masz jakieś pytania, śmiało napisz do nas!"
            : "If you want to make a reservation or have any questions, feel free to write to us!"}
        </h2>
        <div className="inputContainer">
          <input
            type="text"
            name="name"
            placeholder={polish ? "Imię i nazwisko" : "Your name"}
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <textarea
          placeholder={polish ? "Twoja wiadomość..." : "Your message"}
          name="message"
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <div className="labelCookieContainer">
          <label className="labelCheck" htmlFor="accept">
            <p>
              <input
                type="checkbox"
                id="accept"
                name="accept"
                required
                checked={box}
                onChange={() => setBox(!box)}
              />
              {polish
                ? "Wyrażam zgodę na przetwarzanie danych osobowych w celu odpowiedzi na mojego e-maila."
                : "I agree to the processing of my personal data in order to answer my e-mail."}
              <NavLink
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
              <p className="messageAlert">Wiadomość wysłana! </p>
            ) : (
              <button>Wyślij</button>
            )}
            {status === "ERROR" && (
              <p className="messageAlert">ups... coś poszło nie tak!</p>
            )}
          </>
        ) : (
          <>
            {status === "SUCCESS" ? (
              <p className="messageAlert">Message was sent! </p>
            ) : (
              <button>Send</button>
            )}
            {status === "ERROR" && (
              <p className="messageAlert">ups... something wrong!</p>
            )}
          </>
        )}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: var(--primaryColor);
  height: 66vh;
  width: 90%;
  margin: 0 auto;
  @media screen and (max-width: 800px) {
    width: 100%;
    height: auto;
  }
  h2 {
    text-align: center;
    margin: 0 auto;
    margin-bottom: 5vh;
    font-family: var(--buttonFont);
    width: 80%;
    color: var(--secondaryColor2);

    @media screen and (max-width: 800px) {
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
      background: var(--roomDetailBg);
      border: 2px solid var(--secondaryColor2);
      color: var(--primaryColor);
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
    background: var(--roomDetailBg);
    border: 2px solid var(--secondaryColor2);
    color: var(--primaryColor);
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
    color: var(--primaryColor);
    letter-spacing: 1px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.5s;
    border: 2px solid var(--bookBtnColor);
    margin-top: 3vh;
    font-family: var(--buttonFont);
    :hover {
      background: var(--bookBtnColor);
      color: #fff;
    }
    @media screen and (max-width: 800px) {
      width: 50%;
      /* background: rgb(197, 103, 40); */
    }
  }
  .messageAlert {
    font-family: var(--buttonFont);
    font-size: 1.2rem;
    text-transform: uppercase;
    color: var(--primaryColor);
    margin-top: 3vh;
  }
`;

export default MyForm2;
