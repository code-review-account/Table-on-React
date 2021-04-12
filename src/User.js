import React from 'react';
import {calcUnix} from './calcUnix';
import {calcWeight} from './calcWeight';
import { convertHeigth } from './convertHeight';
import {getSalary} from './convertSalary';
import {checkboxSelectRow, checkboxSelectAll} from './checkboxSelection';
import './checkbox.css';

let FetchUsers = class FetchUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            users: []
        };
    }

    componentDidMount() {
        fetch("https://api.npoint.io/324f4ca2cdd639760638").then(response => response.json()).then((result) => {
            this.setState({
                isLoaded: true,
                items: result
            });
        }, (error) => {
            this.setState({
                isLoaded: true,
                error
            });
        }
        )
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
          return <tr>
              <td>Ошибка: {error.message}</td>
              </tr>;
        } else if (!isLoaded) {
          return <tr><td>Загрузка...</td></tr>;
        } else {
          return (
            <table>
                <tr className="tableHead">
                    <td><input className="checkbox" type="checkbox" id="headcheckbox" onClick={checkboxSelectAll}></input><label for="headcheckbox"></label></td>
                    <td>№</td>
                    <td>ФИО</td>
                    <td>Возраст(Лет)</td>
                    <td>Рост</td>
                    <td>Вес</td>
                    <td>Зарплата</td>
                    <td></td>
                    <td></td>
                </tr>
              {items.map(item => (
                <tr className={item.first_name}>
                    <td><input type="checkbox" className="checkbox" onClick={checkboxSelectRow} id={item.first_name}></input><label for={item.first_name}></label></td>
                    <td>1</td>
                    <td>{item.first_name} {item.last_name}</td>
                    <td>{calcUnix(item.date_of_birth)}</td>
                    <td>{convertHeigth(item.height)}</td>
                    <td>{calcWeight(item.weight) + " кг"}</td>
                    <td><span>$</span>{getSalary(item.salary)}</td>
                    <td><i class="fa fa-pencil" aria-hidden="true"></i></td>
                    <td><i class="fa fa-trash-o" aria-hidden="true"></i></td>
                </tr>
              ))}
            </table>
          );
        }
    }
}
export {FetchUsers};