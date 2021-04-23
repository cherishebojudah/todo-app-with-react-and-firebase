import React from 'react';
import './Todo.css';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';

function Todo (props) {
    return (
        <List className = "todo_list">
            <ListItem>
                <ListItemText primary={props.text} secondary = "Dummy Deadline" />
            </ListItem>
        </List>
    )
}

export default Todo