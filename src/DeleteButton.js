import React from 'react';
import {deleteSelected} from './deleteSelected';
import './DeleteButton.css';

let DeleteButton = class DeleteButton extends React.Component {
    
    render () {
        return (
            <button className="disabled" onClick={deleteSelected}>Удалить выбранные</button>
        );
    }
};

export {DeleteButton};