import React from 'react'

function AddProject(props)
{
    return (
        <div class="col-md-12">
            <div class="col-md-4 form-group">
                <input id="txtName" />
            </div>
            <div class="col-md-4 form-group">
                <input id="txtDescription" />
            </div>
            <div class="col-md-4 form-group">
                <button onClick={props.onClick}>{props.buttonText}</button>
            </div>
        </div>
    );
}