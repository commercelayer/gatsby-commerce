# Commerce Layer + Gatsby Tutorial

> How to integrate integrate the [Commerce Layer API](https://commercelayer.io/api/reference/) into your Gatsby application.

## 1. Install Gatsby

```shell
npm install --global gatsby-cli
```

## 2. Create a new site

```shell
gatsby new gatsby-commerce https://github.com/gatsbyjs/gatsby-starter-hello-world
```

## 3. Install the Commerce Layer Plugin

```shell
npm install gatsby-plugin-commercelayer --save
```

```javascript
# gatsby-config.js
module.exports = {
  plugins: ['gatsby-plugin-commercelayer']
}
```

## 4. Create a demo page

Make sure you understand [how it works](https://github.com/commercelayer/static-commerce) and create a demo page (e.g. `pages/index.js`) as follows:

```jsx
import React from "react"
import * as CLayer from 'commercelayer-react'

export default () => (
  <div>
    <hr/>
    <CLayer.Price skuCode="BABYONBU000000FFFFFFNBXX"/>
    <hr/>
    <CLayer.VariantSelect skus={[
      {code: "BABYONBU000000FFFFFFNBXX", name: "Black Baby Onesie Short Sleeve with White Logo (New born)", label: "New born"},
      {code: "BABYONBU000000FFFFFF6MXX", name: "Black Baby Onesie Short Sleeve with White Logo (6 Months)", label: "6 Months"},
      {code: "BABYONBU000000FFFFFF12MX", name: "Black Baby Onesie Short Sleeve with White Logo (12 Months)", label: "12 Months"}]} />
    <hr/>
    <CLayer.AvailabilityMessage
      availableTemplate={
        <div>
          Available in <CLayer.AvailabilityMessageMinDays />-<CLayer.AvailabilityMessageMaxDays /> days with <CLayer.AvailabilityMessageShippingMethodName /> (<CLayer.AvailabilityMessageShippingMethodPrice/>)
        </div>
      }
      unavailableTemplate={
        <p>The selected SKU is not available</p>
      } />
    <hr/>
    <CLayer.AddToBag />
    <hr/>
    <CLayer.ShoppingBagItemsCount />
    <CLayer.ShoppingBagSubtotal />
    <CLayer.ShoppingBagShipping />
    <CLayer.ShoppingBagPayment />
    <CLayer.ShoppingBagDiscount />
    <CLayer.ShoppingBagTaxes />
    <CLayer.ShoppingBagTotal />
    <hr/>
    <CLayer.ShoppingBagItems
      itemTemplate={
        <div>
          <CLayer.ShoppingBagItemImage />
          <CLayer.ShoppingBagItemName />
          <CLayer.ShoppingBagItemUnitAmount />
          <CLayer.ShoppingBagItemQtyContainer />
          <CLayer.ShoppingBagItemRemove />
          <CLayer.ShoppingBagItemTotalAmount />
        </div>
      }
    />
    <hr/>
    <CLayer.Checkout/>
    <hr/>
    <CLayer.Config
      baseUrl="<BASE_URL>"
      clientId="<CLIENT_ID>"
      marketId="<MARKET_ID>"
      countryCode="<COUNTRY_CODE>"
      languageCode="<LANGUAGE_CODE>"
      cartUrl="<CART_URL>"
      returnUrl="<RETURN_URL>"
      privacyUrl="<PRIVACY_URL>"
      termsUrl="<TERMS_URL>" />
  </div>
)
```

## 5. Launch your site

Development:

```shell
gatsby develop
```

Production:

```shell
gatsby build
```
