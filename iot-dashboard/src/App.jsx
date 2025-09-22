
import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Container from './components/Container'

function App() {
  return (
    <>
      <BrowserRouter>
        <Container />
      </BrowserRouter>
    </>
  )
}

export default App