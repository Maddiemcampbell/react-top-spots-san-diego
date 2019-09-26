import React from 'react';

export default props => (
    <div className='well'>
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <button type="button" className="btn btn-info" id="button">
            <a href={"https://www.google.com/maps?q=" + props.location}>Link to Google Maps</a>
        </button>
    </div>
);