import React from "react";
import * as CLayer from "commercelayer-react";
import { Link } from "gatsby";
import "./layout.css";

export default ({ children }) => (
  <div>
    <ul>
      <li>
        <Link to="/">Category page</Link>
      </li>
      <li>
        <Link to="/product-page-radio">Product page (radio)</Link>
      </li>
      <li>
        <Link to="/product-page-select">Product page (select)</Link>
      </li>
    </ul>
    {children}
    <CLayer.Config
      baseUrl="https://static-commerce.commercelayer.io"
      clientId="351020e9c84f2076755083f08bfe8e47365a76395db1059c3219c37abff86534"
      marketId="185"
      countryCode="US"
      languageCode="en"
      cartUrl="https://example.com/cart"
      returnUrl="https://example.com/return"
      privacyUrl="https://example.com/privacy"
      termsUrl="https://example.com/terms"
    />
  </div>
);
