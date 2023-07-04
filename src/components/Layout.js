<<<<<<< HEAD
import React from 'react'
import Header from './Header'
=======
import Content from "./Content"
import Footer from "./Footer"
import Header from "./Header"
import LoginModal from "./modals/LoginModal"

>>>>>>> d6d80bb4304adff6ec09353e31a124da77e4efba

const Layout = () => {
  return (
    <div>
<<<<<<< HEAD
      <Header />
=======
        <Header />
        <Content />
        <Footer />
        {/* <LoginModal isOpen={true} onRequestClose={false} /> */}
>>>>>>> d6d80bb4304adff6ec09353e31a124da77e4efba
    </div>
  )
}

export default Layout
