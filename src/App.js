//Initialize react router
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/layout/Navbar";
import Landing from "./Components/layout/Landing";
// import Register from "./Components/auth/Register";
// import LogIn from "./Components/auth/LogIn";
// import Developers from "./Components/Developers";
// import ProfileDetail from "./Components/ProfileDetail";
// import Dashboard from "./Components/Dashboard";
// import EditProfile from "./Components/EditProfile";
// import AddEducation from "./Components/AddEducation";
// import AddExperience from "./Components/AddExperience";
import { useState } from "react";
import Dashboard from "./Components/dashboard/Dashboard";
import Profiles from "./Components/profiles/Profiles";
import LogIn from "./Components/auth/LogIn";
import Register from "./Components/auth/Register";
// import Posts from "./Components/Posts";
// import NotFound from './Components/layout/NotFound';
// import Spinner from './Components/layout/Spinner';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      {/* <NotFound/> */}
      {/* <Spinner/> */}
    
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/login" element={<LogIn  />} />
          <Route path="/register" element={<Register />} />
          {
          /* 
          {!isLoggedIn && <Route path="/register" element={<Register />} />}
          <Route path="/developers/:productId" element={<ProfileDetail />} />

          <Route path="/edit-profile" element={<EditProfile />} />

          <Route path="/add-education" element={<AddEducation />} />

          <Route path="/add-experience" element={ <AddExperience />}/>

          <Route path="/posts" element={  <Posts />}/> */}
        </Routes>
        {/* <Dashboard /> */}

        {/* <Developers /> */}
        {/* <Register/> */}

        {/* <Landing/> */}
     
    </div>
  );
}

export default App;

//our-domain.com/login => Login Component
//our-domain.com/register => Register Component
//out-domain.com/product-detail/p1
