import { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import { deleteUser, getAllUsers } from "../../api/internal";
import styles from "./User.module.css";
import { useNavigate } from "react-router-dom";

function User() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await getAllUsers();
      if (response.status === 200) {
        setUsers(response.data.users);
      }
    } catch (error) {
      console.error("Error getting users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUserHandler = (userId) => async () => {
    try {
      const response = await deleteUser(userId);
      if (response.status === 200) {
        await fetchUsers();
        navigate("/");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  if (users.length === 0) {
    return <Loader text="users" />;
  }

  return (
    <div className={styles.usersWrapper}>
      {users.map((user) => (
        <div key={user._id} className={styles.user}>
          <p>User name: {user.name}</p>
          <p>User's email address: {user.email}</p>
          <p>User's Role: {user.role}</p>
          <button onClick={deleteUserHandler(user._id)} className={styles.deleteButton}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default User;