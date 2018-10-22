// Core
import React, { Component } from 'react';

// Components
import Catcher from 'components/Catcher';
import { withProfile } from 'components/HOC/withProfile';
import Spinner from 'components/Spinner';
import Task from 'components/Task';
import Checkbox from 'theme/assets/Checkbox';

// Instruments
import Styles from './styles.m.css';
import { api } from '../../REST'; // ! Импорт модуля API должен иметь именно такой вид (import { api } from '../../REST')

@withProfile
export default class Scheduler extends Component {

    state = {
        isSpinning: false,
        tasks: [
            { id: 'id_qazwsx', comment: 'Hi there', created: 1501501501501},
            { id: 'id_iddqd', comment: 'Prepare to die!', created: 1501501501502},
        ],
    };

    _setPostFetchingState = (state) => {
        this.setState({
            isSpinning: state,
        });
    }

    _createTask = () => {
        console.log('_createTask');
    }

    _starTask = (id) => {
        console.log('_starTask', id);
    }

    _editTask = (id) => {
        console.log('_editTask', id);

    }

    _removeTask = (id) => {
        this._setPostFetchingState(true);

        this.setState(({ tasks }) => ({
            tasks: tasks.filter((task) => task.id !== id),
            isSpinning: false,
        }));
    }

    render() {
        const { tasks, isSpinning } = this.state;

        const tasksJSX = tasks.map((task) => {
            return (
                <Catcher key = { task.id }>
                    <Task
                        { ...task }
                        _editTask = { this._editTask }
                        _removeTask = { this._removeTask }
                        _starTask = { this._starTask }
                    />
                </Catcher>
            );
        });

        return (
            <section className = { Styles.scheduler }>
                <Spinner isSpinning = { isSpinning } />
                <main>
                    <header>
                        <h1>Планировщик задач</h1>
                        <input type = 'search' />
                    </header>

                    <section>
                        <form onSubmit = { this._createTask }>
                            <input
                                className = { Styles.createTask }
                                maxLength = '50'
                                placeholder = 'Описание задачи'
                                type = 'text'
                            />
                            <button>Добавить задачу</button>
                        </form>
                        <div className = 'overlay'>
                            <ul>
                                { tasksJSX }
                            </ul>
                        </div>
                    </section>

                    <footer>
                        <Checkbox
                            inlineBlock
                            checked = 'false'
                            className = { Styles.complete }
                            color1 = '#3b8ef3'
                            color2 = '#fff'
                        />
                        <span className = { Styles.completeAllTasks }>Все задачи выполнены</span>
                    </footer>
                </main>
            </section>
        );
    }
}
