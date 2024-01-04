import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
// import MyCarousel from './MyCarousel'
import './Home.css'
import ProductsMain from './CardMain'
export default function Home() {

  return (
    <div>
    <Header></Header>  
    {/* <MyCarousel></MyCarousel> */}
    <Main></Main>
    <ProductsMain/>
    <Footer></Footer>
    </div>
  )
}
