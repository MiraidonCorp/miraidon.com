import * as React from "react"
import {Link, Slice} from "gatsby"
import SwitchBtn from "./SwitchBtn";


const Layout = ({ children }) => {
  return (
    <>
        {/* {isLoading && <Preloader />}  */}
      <SwitchBtn />
      <Slice alias="header" />
        {children}
      <Slice alias="footer" />
    </>
  )
}

export default Layout