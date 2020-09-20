import React, { Component } from 'react';
import {Accordion, Button, Card} from 'react-bootstrap';
import { connect } from 'react-redux';

import {deletePrompt} from '../actions/deletePrompt';

class ActionsContainer extends Component {

    handleDelete = (props) => {
        props.deletePrompt(props.prompt.id, props.prompt.mood_id)
    }

    clickMeButton = (props) => {
        if (props.prompt.controllable === true) {
            return <Button size='sm' variant='outline-primary' >Notes</Button>
        } else {
            return <Button size='sm' variant='outline-primary' >Try Clicking Me</Button>
        }
    }

    render() {
        return (
            <div>
                <Accordion.Collapse>
                    <Card.Body>
                        <Button size='sm' variant='outline-danger' onClick={() => this.handleDelete(this.props)}>Delete</Button>
                        {this.clickMeButton(this.props)}
                    </Card.Body>
                </Accordion.Collapse>
            </div>
        );
    }
}

export default connect(null, {deletePrompt})(ActionsContainer);