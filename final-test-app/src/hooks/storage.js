import { useState, useEffect } from "react";

const STORAGE_KEY = 'itss-student-1'
function useStorage(){


    const initialValue = [
         "Huyen", "Hoa", "Hung", "Long"];
    const [studentList, setStudentList] = useState([...initialValue])




    const deleteStudent = (nameStudent) =>{

        if(studentList.indexOf(nameStudent) >= 0){
            var index = studentList.indexOf(nameStudent)
            studentList.splice(index, 1)
            setStudentList([...studentList])
        }
        
    }

    return [studentList, deleteStudent]
}

export default useStorage