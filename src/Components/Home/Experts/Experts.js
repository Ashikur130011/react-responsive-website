import React from 'react';
import mechanic1 from '../../../images/mechanic/mechanic-1.jpg';
import mechanic2 from '../../../images/mechanic/mechanic-2.jpg';
import mechanic3 from '../../../images/mechanic/mechanic-3.jpg';
import mechanic4 from '../../../images/mechanic/mechanic-4.jpg';
import mechanic5 from '../../../images/mechanic/mechanic-5.jpg';
import Expert from '../Expert/Expert';

const experts = [
    {
        img: mechanic1,
        name: 'Andrew Smith',
        expertise: '-Engine Expert'
    },
    {
        img: mechanic2,
        name: 'Andrew Smith1',
        expertise: '-Engine Expert'
    },
    {
        img: mechanic3,
        name: 'Andrew Smith2',
        expertise: '-Engine Expert'
    },
    {
        img: mechanic4,
        name: 'Andrew Smith3',
        expertise: '-Engine Expert'
    },
    {
        img: mechanic5,
        name: 'Andrew Smith4',
        expertise: '-Engine Expert'
    }
]

const Experts = () => {
    return (
        <div id="experts">
            <h1 className="text-danger">Our Experts</h1>
            <div className="row">
                {
                    experts.map( expert => <Expert
                    key={expert.name}
                    expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;