import React from 'react';
import './Table.css';
import {FetchUsers} from './User';

let Table = class Table extends React.Component {
    
    render () {
        return (
                <FetchUsers />
        );
    }
};


export {Table};
