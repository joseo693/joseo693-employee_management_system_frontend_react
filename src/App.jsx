import './App.css'
import EmployeeComponent from './components/EmployeeComponent'
import EmployeeListComponent from './components/EmployeeListComponent'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      {/* <BrowserRouter> - enables routing, listens to browser’s URL and decides which component to show. */}
      <BrowserRouter>
        <HeaderComponent/>
        {/* <Routes> - holds all different routes */}
        <Routes>
          {/* Route> - defines one “path” and the component to display for it. */}
          <Route path='/' element= { <EmployeeListComponent /> } />
          <Route path='/employees' element={ <EmployeeListComponent /> } />
          <Route path='/add-employee' element={ <EmployeeComponent /> } />

        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
