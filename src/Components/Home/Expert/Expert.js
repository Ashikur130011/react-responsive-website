import React from 'react';

const Expert = ({expert}) => {
    const {img, name, expertize} = expert;
    return (
        <div className="col-lg-3 col-sm-6 col-12">
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h5>{expertize}</h5>
        </div>
    );
};

export default Expert;