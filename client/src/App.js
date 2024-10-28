import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { cTeacher, cTeachers, gSchool, gTeacher } from './globals';

function App() {
  const [tName, setTName] = useState('');
  const [tStartDate, setTStartDate] = useState('');
  const [tSubject, setTSubject] = useState('');
  const [sName, setSName] = useState('');
  const [sStartDate, setSStartDate] = useState('');
  const [sStudentCount, setSStudentCount] = useState('');
  const [sDescription, setSDescription] = useState('');

  const [data, setData] = useState([]);

  useEffect(async () => {
    // get all current data.
    const schoolData = await fetch(gSchool).then(() =>  {
      setData(schoolData);
    }).catch(e => console.error(e));

    const teacherData = await fetch(gTeacher).then(() =>  {
      let newData = [];
      newData.push(...data, teacherData);
      setData(newData);
    }).catch(e => console.error(e));
  });

  const handleTeacherSubmit = async () => {
    let newTeacher = {
      name: tName,
      startDate: tStartDate,
      tSubject: tSubject,
    }

    await axios.post(cTeacher, JSON.stringify(newTeacher)).then(() => {
      setData(...data, newTeacher);
    }).catch(e => console.error(e));

    console.log('teacher created!');
  };
  const handleSchoolSubmit = async () => {
    let newSchool = {
      name: sName,
      startDate: sStartDate,
      studentCount: sStudentCount,
      description: sDescription,
    }

    await axios.post(cTeacher, JSON.stringify(newTeacher)).then(() => {
      setData(...data, newTeacher);
    }).catch(e => console.error(e));

    console.log('teacher created!');
  };
  
  return (
    <div className="App">
      <form onSubmit={handleSchoolSubmit}>
        <input type="text" placeholder="Name of School" onChange={(e) => setSName(e.target.value)} />
        <input type="text" placeholder="School Start Date" onChange={(e) = setSStartDate(e.target.value)} />
        <input type="text" placeholder="Student Count" onChange={(e) = setSStudentCount(e.target.value)} />
        <textarea placeholder="School Desc" onChange={(e) = setSDescription(e.target.value)}></textarea>
        <button>Add School</button>
      </form>
      <form onSubmit={handleTeacherSubmit}>
        <input type="text" placeholder="Name of Teacher" onChange ={(e) => setTName(e.target.value)} />
        <input type="date" placeholder='start date' onChange={(e) => setTStartDate(e.tartget.value)} />
        <input type="text" placeholder="Subject" onChange={(e) => setTSubject(e.target.value)} />
        
        <button>Add Teacher</button>
      </form>
      <div class="container">
        {data.map((item, index) => (
          <p key={index}>Teacher:
            {item.name}:{item.startDate}:{item.subject}; {index}
            <p>
              School:
              {item.name}:{item.startDate}:{item.studentCount}:{item.descriptions}; {index}
            </p>
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
