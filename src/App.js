import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from './components/Navbar'
import Mainpage from './pages/Main page/Mainpage'
import Footer from './components/Footer'

export default function App() {
  const [darkMode, setDarkMode] = React.useState(false)

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode)
  }

  React.useEffect(() => {
    const data = window.localStorage.getItem('darkMode')
    if (data !== null) setDarkMode(JSON.parse(data))
  }, [])

  React.useEffect(() => {
    window.localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <Container fluid className="app--container">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        {/* <Routes> */}
        {/* <Route path="/my-website" element={<Mainpage darkMode={darkMode} />} /> */}
        <Mainpage darkMode={darkMode} />
        {/* <Route path="/about" element={<About darkMode={darkMode} />} />
            <Route path="/blog" element={<Blog darkMode={darkMode} />} />
            <Route path="/contact" element={<Contact darkMode={darkMode} />} />
            <Route path="/projects" element={<Projects darkMode={darkMode} />} /> */}
        {/* </Routes> */}
        <Footer darkMode={darkMode} />
      </Container>
    </div>
  )
}
