import Content from "./Content"
import Footer from "./Footer"
import Header from "./Header"
import LoginModal from "./modals/LoginModal"


const Layout = () => {
  return (
    <div>
        <Header />
        <Content />
        <Footer />
        {/* <LoginModal isOpen={true} onRequestClose={false} /> */}
    </div>
  )
}

export default Layout
