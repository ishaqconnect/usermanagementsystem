import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.css";
import Error from "./pages/Error/Error";
import Dashboardd from "./components/Dashboardd/Dashboardd"
import SubmitUser from "./pages/SubmitUser/SubmitUser";
import User from "./pages/User/User";

function App() {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <div className={styles.layout}>
          <Navbar />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Dashboardd />
            <Routes>
              <Route
                path="/"
                exact
                element={
                  <div className={styles.main}>
                    <User />
                  </div>
                }
              />
              <Route
                path="/create-user"
                exact
                element={
                  <div className={styles.main}>
                    <SubmitUser />
                  </div>
                }
              />

              <Route
                path="/all-users"
                exact
                element={
                  <div className={styles.main}>
                    <User />
                  </div>
                }
              />
              <Route
                path="*"
                element={
                  <div className={styles.main}>
                    <Error />
                  </div>
                }
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
