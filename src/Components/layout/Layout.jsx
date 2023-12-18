import React from 'react'
import Header from '../../component/Header/Header'
import Footer from '../../component/Footer/Footer'
function Layout(props) {
  return (
    <div>
        <Header/>
        {props.children}
        <Footer/>
    </div>
  )
}

export default Layout