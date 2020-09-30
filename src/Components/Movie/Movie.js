import React from 'react';

export default props => {

    return (
        <section>
            <img src={props.location.movieProps.poster_path} alt={props.location.movieProps.original_title}/>
            <h2>{props.location.movieProps.original_title}</h2>
            <p>{props.location.movieProps.overview}</p>
        </section>
    )
}