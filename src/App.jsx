import { useMemo, useState, useRef } from "react";
import "./App.css";

const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = `!@#$%^&\*()-\_=+[]{}|;:'\\",.<>?/~`;

function App() {
  // Campi controllati
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("");

  // Campi non controllati
  const fullNameReF = useRef();
  const specializationRef = useRef();
  const experienceYearsRef = useRef();

  // Validazione
  const isUsernameValid = useMemo(() => {
    const charsValid = username
      .split("")
      .every(
        (char) => letters.includes(char.toLowerCase()) || numbers.includes(char)
      );

    return charsValid && username.trim().length >= 6;
  }, [username]);

  const isPasswordValid = useMemo(() => {
    return (
      password.trim().length >= 8 &&
      password.split("").some((char) => letters.includes(char)) &&
      password.split("").some((char) => numbers.includes(char)) &&
      password.split("").some((char) => symbols.includes(char))
    );
  }, [password]);

  const isDescriptionValid = useMemo(() => {
    return description.trim().length >= 100 && description.trim().length < 1000;
  }, [description]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Valori non controllati
    const fullName = fullNameReF.current.value;
    const specialization = specializationRef.current.value;
    const experienceYears = experienceYearsRef.current.value;

    if (
      !fullName.trim() ||
      !username.trim() ||
      !password.trim() ||
      !specialization.trim() ||
      !experienceYears.trim() ||
      experienceYears <= 0 ||
      !description.trim() ||
      !isUsernameValid ||
      !isPasswordValid ||
      !isDescriptionValid
    ) {
      alert("Errore: compilare tutti i campi correttamente");
      return;
    }
    console.log("Submit effettuato:", {
      fullName,
      username,
      password,
      specialization,
      experienceYears,
      description,
    });
  };

  return (
    <>
      <div>
        <h1>Web developer Signup</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">
            <p>Nome Completo</p>
            <input type="text" ref={fullNameReF} />
          </label>
          <label htmlFor="">
            <p>UserName</p>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {username.trim() && (
              <p style={{ color: isUsernameValid ? "green" : "red" }}>
                {isUsernameValid
                  ? "Username valido"
                  : "Deve contenere almeno 6 caratteri alfanumerici."}
              </p>
            )}
          </label>
          <label htmlFor="">
            <p>Password</p>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {password.trim() && (
              <p style={{ color: isPasswordValid ? "green" : "red" }}>
                {isPasswordValid
                  ? "Password valida"
                  : "Deve contenere almeno 8 caratteri alfanumerici, una lettera, un numero, un simbolo."}
              </p>
            )}
          </label>
          <label htmlFor="">
            <p>Specialization</p>
            <select ref={specializationRef}>
              <option value="Full Stack">Full Stack</option>
              <option value="Front-end">Front-end</option>
              <option value="Back-end">Back-end</option>
            </select>
          </label>
          <label htmlFor="">
            <p>Experience Years</p>
            <input type="number" ref={experienceYearsRef} />
          </label>
          <label htmlFor="">
            <p>Description</p>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {description.trim() && (
              <p style={{ color: isDescriptionValid ? "green" : "red" }}>
                {isDescriptionValid
                  ? "Descrizione valida"
                  : "Deve contenere almeno 100 caratteri e meno 1000."}
              </p>
            )}
          </label>
          <button type="submit">Register now</button>
        </form>
      </div>
    </>
  );
}

export default App;
