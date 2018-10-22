// Core
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Components
import { withProfile } from 'components/HOC/withProfile';
import Star from 'theme/assets/Star';
import Edit from 'theme/assets/Edit';
import Remove from 'theme/assets/Remove';

// Instruments
import Styles from './styles.m.css';

@withProfile
export default class Task extends PureComponent {

    static propTypes = {
        _editTask: PropTypes.func.isRequired,
        _editTask: PropTypes.func.isRequired,
        _starTask: PropTypes.func.isRequired,
        created: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
    };

    _getTaskShape = ({
        id = this.props.id,
        completed = this.props.completed,
        favorite = this.props.favorite,
        message = this.props.message,
    }) => ({
        id,
        completed,
        favorite,
        message,
    });

    _starTask = () => {
        const { _starTask, id } = this.props;

        _starTask(id);
    }

    _editTask = () => {
        const { _editTask, id } = this.props;

        _editTask(id);
    }

    _removeTask = () => {
        const { _removeTask, id } = this.props;

        _removeTask(id);
    }

    render () {
        return (
            <li className = { Styles.task }>
                <span></span>
                {/* <div className = { Styles.content }>
                    <input type = 'text' />
                </div> */}
                <div className = { Styles.actions }>
                    <Star
                        checked = 'false'
                        className = { Styles.toggleTaskFavoriteState }
                        color1 = '#3b8ef3'
                        color2 = '#fff'
                        color3 = 'cyan'
                        disabled = 'false'
                        hover = 'false'
                        inlineBlock = 'true'
                        onClick = { this._starTask }
                    />
                    <Edit
                        checked = 'false'
                        className = { Styles.updateTaskMessageOnClick }
                        color1 = '#3b8ef3'
                        color2 = '#fff'
                        inlineBlock = 'true'
                        onClick = { this._editTask }
                    />
                    <Remove
                        className = { Styles.removeTask }
                        color1 = '#3b8ef3'
                        color2 = '#fff'
                        color3 = 'red'
                        disabled = 'false'
                        hover = 'false'
                        inlineBlock = 'true'
                        onClick = { this._removeTask }
                    />
                </div>
            </li>
        );
    }
}
