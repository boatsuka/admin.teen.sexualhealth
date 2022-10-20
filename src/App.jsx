import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PreLayout from "./components/PreLayout";

import Login from "./pages/auth/Login";
import Error from "./pages/error/Error";
import AddTeacher from "./pages/teacher/AddTeacher";
import AddStudent from "./pages/student/AddStudent";
import ProfileStudent from "./pages/student/ProfileStudent";
import ProfileTeacher from "./pages/teacher/ProfileTeacher";
import EditStudent from "./pages/student/EditStudent";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route element={<PreLayout />}>
            <Route path="teacher">
              <Route path="add" element={<AddTeacher />} />
              <Route path="profile/:teacherId" element={<ProfileTeacher />} />
            </Route>
            <Route path="student">
              <Route path="add" element={<AddStudent />} />
              <Route path="edit/:studentId" element={<EditStudent />} />
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
