import React from 'react'
import "./App.css"
import {Container} from 'semantic-ui-react'
import TodoList from './To-do-List'

const App = () => {
  return (
    <Container>
      <TodoList />
    </Container>
  )
}

export default App