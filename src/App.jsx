import { useState } from "react";
import "./App.css";

function App() {
  // Campi controllati
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [experienceYears, setExperienceYears] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !fullName.trim() ||
      !username.trim() ||
      !password.trim() ||
      !specialization.trim() ||
      !experienceYears.trim() ||
      experienceYears <= 0 ||
      !description.trim()
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
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </label>
          <label htmlFor="">
            <p>UserName</p>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label htmlFor="">
            <p>Password</p>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label htmlFor="">
            <p>Specialization</p>
            <select
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
            >
              <option value="Full Stack">Full Stack</option>
              <option value="Front-end">Front-end</option>
              <option value="Back-end">Back-end</option>
            </select>
          </label>
          <label htmlFor="">
            <p>Experience Years</p>
            <input
              type="number"
              value={experienceYears}
              onChange={(e) => setExperienceYears(e.target.value)}
            />
          </label>
          <label htmlFor="">
            <p>Description</p>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <button type="submit">Register now</button>
        </form>
      </div>
    </>
  );
}

export default App;
