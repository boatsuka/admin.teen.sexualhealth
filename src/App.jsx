import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PreLayout from "./components/PreLayout";

import Login from "./pages/auth/Login";
import Error from "./pages/error/Error";
import AddStudent from "./pages/student/AddStudent";
import ProfileStudent from "./pages/student/ProfileStudent";
import ProfileTeacher from "./pages/teacher/ProfileTeacher";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route element={<PreLayout />}>
            <Route path="teacher">
              <Route path="profile/:teacherId" element={<ProfileTeacher />} />
            </Route>
            <Route path="student">
              <Route path="add" element={<AddStudent />} />
              <Route path="profile/:studentId" element={<ProfileStudent />} />
            </Route>
          </Route>
          <Route index path="/" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
