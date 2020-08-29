import React, { useState } from 'react';
import '../styles/taskStyle.css';
import { toast } from 'react-toastify';

const Task = ({task, index, complete, remove, edit}) => {

    const [titleInput, setTitleInput] = useState(task.title);
    const [describtionInput, setDescriptionInput] = useState(task.describtion);

    const handleSubmit = (event) => {
        event.preventDefault();
        if(task.title !== event.target.changedTitle.value || task.describtion !== event.target.changedDescribtion.value){
            edit(index, event.target.changedTitle.value, event.target.changedDescribtion.value);
        }
    }

    return(
        <div className="row">
            <div className="col-lg-12">
                <div style={{ textDecoration: task.completed ? "line-through" : "" }}>
                    <li key={index} className={task.completed ? "list-group-item doneItem": "list-group-item"}>
                        <i className={task.completed ? 'fa fa-check doneIcon': 'fa fa-circle notDoneIcon'} onClick={() => {complete(index)}}> </i>
                            {task.title}
                            <span className="describtion">{task.describtion}</span>
                        <i className="fa fa-trash removeIcon" onClick={() => remove(index)}></i>
                        <i className="fa fa-edit editIcon" data-toggle="modal" data-target={"#modal" + index} ></i>
                    </li>
                </div>
            </div>

            <div className="modal fade" id={"modal" + index} tabIndex="-1" role="dialog" aria-labelledby="EditTask" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="EditTask">Task edit</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form onSubmit={handleSubmit}>
                        <div className="modal-body">
                            <div className="form-group row">
                                <label htmlFor="title" className="col-sm-4 col-form-label">New name:</label>
                                <div className="col-sm-8">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="title"
                                        name="changedTitle"
                                        value={titleInput}
                                        onChange={(e) => setTitleInput(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="describtion" className="col-sm-4 col-form-label">New description:</label>
                                <div className="col-sm-8">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="describtion"
                                        name="changedDescribtion"
                                        value={describtionInput}
                                        onChange={(e) => setDescriptionInput(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-success" onClick={() => toast.success("✔ Saved", {autoClose: 1500})}><i className="fa fa-save"></i> Save</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Task;