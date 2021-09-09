import React, {useState} from 'react'
import useStorage from '../hooks/storage'

import Input from './Input'

function Students(){

    const [studentList, deleteStudent] = useStorage();
    const [nameStudentDelete, setNameStudentDelete] = useState('');

    const handleAdd = text =>{
        setNameStudentDelete(text)
    }

    


    return (
        <div className="panel">

            <div className="panel-block">
                学生一覧：[Huyen, Hoa, Hung, Long]
            </div>
            <div className="panel-block">
                削除位を入力してください。
            </div>
            <input value={nameStudentDelete} onChange={(event) => setNameStudentDelete(event.target.value)} />
            <div 
                className = 'panel-book'>
                    <button variant = "primary" size = "lg" active
                    className = "button"
                    onClick = {deleteStudent}>
                       確定
                    </button>
            </div>

            <div className="panel-block">
                削除する名前：<label>{nameStudentDelete}</label>
            </div>

            <div className="panel-block">
                新しい一覧：[{studentList.map(student => (
                <label>{student},</label>
                ))
    
                }
                ]
            </div>

            
        </div>
    )
}

export default Students