import React, { Component } from 'react'
// import axion from 'axion'
import {  Header, Form, Input, } from 'semantic-ui-react'

let endpoint = "http://localhost:9000"

class TodoList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            task: "",
            items: [],
        }
    }

    ComponentDidMount() {
        this.getTask();
      
    }


    render() {
        return (
            <div>
                <div className='row'>
                    <Header className='header' as='h2' color='yellow'>TODO LIST</Header>
                </div>
                <div className='row'>
                    <Form onSubmit={this.onSubmit}>
                    <Input 
                    type='text'
                    name='task'
                    onChange={this.onChange}
                    value={this.state.task}
                    fluid
                    placeholder='Cerate task'
                    />
                    </Form>
                </div>
            </div>
        )
    }

}

export default TodoList