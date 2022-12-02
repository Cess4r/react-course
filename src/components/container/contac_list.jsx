import React from 'react'
import PropTypes from 'prop-types'
import { CONTACT } from '../../models/contact.class';
import ContactComp from '../pure/contact';
import { LEVELS } from '../../models/levels.enum';

const TaskListComponent=()=> {
    const defaultTask = new CONTACT('Example', 'ffff', false, LEVELS.NORMAL)
    return (
        <div>
            <div>
                Your Tasks:
            </div>
            <div>
                <ContactComp task={ defaultTask }></ContactComp>
            </div>
        </div>
    );
};

export default TaskListComponent
