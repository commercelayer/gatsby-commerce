import React from "react"
import { Link } from "gatsby"
import "./layout.css"

export default ({ children }) => <div>
  <ul>
    <li><Link to="/">Category page</Link></li>
    <li><Link to="/product-page-radio">Product page (radio)</Link></li>
    <li><Link to="/product-page-select">Product page (select)</Link></li>
  </ul>
  {children}
</div>
