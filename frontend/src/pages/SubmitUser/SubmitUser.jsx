import { useState} from "react";
import { submitUser} from "../../api/internal";
import styles from "./SubmitUser.module.css";
import TextInput from "../../components/TextInput/TextInput";
import { useNavigate } from "react-router-dom";

function SubmitUser() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [validEmail, setValidEmail] = useState(true); 
  const submitHandler = async () => {
    if (!validEmail) {
      return;
    }

    const data = {
      name,
      email,
      role,
    };

    const response = await submitUser(data);

    if (response.status === 201) {
      navigate("/");
    }
  };

  const validateEmail = (inputEmail) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = regex.test(inputEmail);
    setValidEmail(isValid);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>Add a New User!</div>
      <TextInput
        type="text"
        name="name"
        placeholder="user name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ width: "60%" }}
      />
      <TextInput
        type="text"
        name="email address"
        placeholder="email address"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          validateEmail(e.target.value);
        }}
        style={{ width: "60%" }}
      />
      {!validEmail && (
        <div style={{ color: "red" }}>Please enter a valid email address such as admin@abc.com</div>
      )}
      <TextInput
        type="text"
        name="role"
        placeholder="role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        style={{ width: "60%" }}
      />
      <button
        className={styles.submit}
        onClick={submitHandler}
        disabled={name === "" || email === "" || role === "" || !validEmail}
      >
        Submit
      </button>
    </div>
  );
}

export default SubmitUser;