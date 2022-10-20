import axios from "axios";

export const getStudentById = async (studentId) => {
  const data = await axios
    .get(`${import.meta.env.VITE_API}/student/${studentId}`)
    .then((res) => res.data);

  return data;
};

export const getStudentScoreById = async (studentId) => {
  const data = await axios
    .get(`${import.meta.env.VITE_API}/student/score/${studentId}`)
    .then((res) => res.data);

  return data;
};

export const postStudentBySurvey = async (
  studentId,
  submoduleId,
  checkedId
) => {
  const data = await axios
    .post(
      `${
        import.meta.env.VITE_API
      }/student/survey/${studentId}/${submoduleId}/${checkedId}`
    )
    .then((res) => res.data);

  return data;
};

export const postStudent = async (
  teacherId,
  student_fisrtname,
  student_lastname,
  student_level,
  student_nickname,
  student_study_year,
  student_initial_name,
  student_dragdrop,
  student_avatar_path
) => {
  const data = axios
    .post(`${import.meta.env.VITE_API}/student/create`, {
      student_fisrtname: student_fisrtname,
      student_lastname: student_lastname,
      student_level: student_level,
      student_nickname: student_nickname,
      student_study_year: student_study_year,
      student_initial_name: student_initial_name,
      teacher: teacherId,
      student_dragdrop: student_dragdrop,
      student_avatar_path: student_avatar_path,
    })
    .then((res) => res.data);

  return data;
};

export const updateStudent = async (
  student_id,
  student_fisrtname,
  student_lastname,
  student_level,
  student_nickname,
  student_study_year,
  student_initial_name,
  student_dragdrop,
  student_avatar_path
) => {
  const data = axios
    .patch(`${import.meta.env.VITE_API}/student/update/${student_id}`, {
      student_fisrtname: student_fisrtname,
      student_lastname: student_lastname,
      student_level: student_level,
      student_nickname: student_nickname,
      student_study_year: student_study_year,
      student_initial_name: student_initial_name,
      student_dragdrop: student_dragdrop,
      student_avatar_path: student_avatar_path,
    })
    .then((res) => res.data);

  return data;
};

export const deleteStudent = async (student_id) => {
  const data = await axios
    .delete(`${import.meta.env.VITE_API}/student/remove-hard/${student_id}`)
    .then((res) => res.data);

  return data
};
