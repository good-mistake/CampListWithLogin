import { useEffect, useState } from "react";
import "./App.css";
import { data } from "./yelp-camp.campgrounds";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Login";

import MainPage from "./MainPage";
import CreateAccount from "./CreateAccount";
import UserInfo from "./UserInfo";
import CampList from "./CampList";
import CampListItem from "./CampListItem";
console.log(data[0].image);
function App() {
  const [createAccount, setCreateAccount] = useState(false);
  const handleCreate = async (user) => {
    console.log("New user:", user);

    setCreateAccount(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" exact component={MainPage} element={<MainPage />} />
        <Route
          path="/CreateAccount"
          component={CreateAccount}
          element={<CreateAccount onCreate={handleCreate} />}
        />
        <Route path="/UserInfo" component={UserInfo} element={<UserInfo />} />
        <Route path="/Login" component={Login} element={<Login />} />
        <Route path="/CampList" component={CampList} element={<CampList />} />
        <Route
          path="/campItem/:id"
          component={CampListItem}
          element={<CampListItem />}
        />
      </Routes>
    </Router>
  );
}

export default App;
