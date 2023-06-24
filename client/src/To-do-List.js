import React, { Component } from 'react'
import axios from 'axios'
import { Header, Form, Input, Card, Icon, } from 'semantic-ui-react'

let endpoint = "http://localhost:9000"

class TodoList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            task: "",
            items: [],
        }
    }

    componentDidMount() {
        this.getTask();

    }
    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    onSubmit = () => {
        let { task } = this.state
        if (task) {
            axios.post(endpoint + "/api/tasks", 
            { task }, {
                headers: {
                    "Content-Type": "application/x-www-formurlencoded"
                }
            }).then((res) => {
                this.getTask()
                this.setState({
                    task: ""
                })
                console.log(res)
            })
        }
    }

    getTask = () => {
        axios.get(endpoint + "/api/task", { timeout: 5000 }).then((res) => {
            if (res.data) {
                this.setState({
                    items: res.data.map((item) => {
                        let color = "yellow"
                        let style = {
                            wordWrap: "break-word",
                        }
                        if (item.status) {
                            color = "green"
                            style['textDecorationLine'] = "line-through"
                        }
                        return (
                            <Card key={item._id} color={color} fluid className='rough'>
                                <Card.Content>
                                    <Card.Header textAlign='left'>
                                        <div style={style}>
                                            {item.task}
                                        </div>
                                    </Card.Header>
                                    <Card.Meta textAlign='right'>
                                        <Icon
                                            name='check circle'
                                            color='blue'
                                            onClick={() => this.updateTask(item._id)}
                                        />
                                        <span style={{ paddingRight: 10 }}>Undo</span>
                                        <Icon
                                            name='delete'
                                            color='red'
                                            onClick={() => this.deleteTask(item._id)}
                                        />
                                        <span style={{ paddingRight: 10 }}>Delete</span>
                                    </Card.Meta>
                                </Card.Content>
                            </Card>
                        )
                    })
                })
            } else {
                this.setState({
                    items: []
                })
            }
        })
    }

    updateTask = (id) => {
        axios.put(endpoint + "/api/task" + id, {
            headers: {

            }
        }).then((res) => {
            console.log(res)
            this.getTask()
        })
    }

    undoTask = (id) => {
        axios.put(endpoint + "/api/UndoTask" + id, {
            headers: {
                "Content-Type": "application/x-www-formurlencoded"
            }
        }).then((res) => {
            console.log(res)
            this.getTask()
        })
    }

    deleteTask = (id) => {
        axios.put(endpoint + "/api/deleteTask" + id, {
            headers: {
                "Content-Type": "application/x-www-formurlencoded"
            }
        }).then((res) => {
            console.log(res)
            this.getTask()
        })
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
                <div className='row'>
                    <Card.Group>{this.state.items}</Card.Group>
                </div>
            </div>
        )
    }

}

export default TodoList