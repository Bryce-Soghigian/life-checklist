import React from 'react'
import './index.css';
export default function ChecklistItem(props) {
    console.log(props,"props")
    console.log(props.isComplete,"is completed")
    return (
        <div className={props.isComplete}>
            <p>{props.goal}</p>
        </div>
    )
}
