# Commerce Layer + Gatsby Tutorial

> How to integrate integrate the [Commerce Layer API](https://commercelayer.io/api/reference/) into your Gatsby application.

## 1. Install Gatsby

```shell
npm install --global gatsby-cli
```

## 2. Create a new site

```shell
gatsby new gatsby-commerce
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

Make sure you understand [how it works](https://github.com/commercelayer/static-commerce) and create some demo pages, like the following:

### Category page

```jsx
import React, { Component } from 'react'
import Layout from "../components/layout"
import * as CLayer from 'commercelayer-react'

export default class App extends Component {

  render () {
    return (
      <Layout>
        <div>
          <CLayer.Price skuCode="BABYONBU000000E63E74NBXX"/>

          <CLayer.AddToBag skuCode="BABYONBU000000E63E74NBXX"
                           skuName="Black Baby Onesie Short Sleeve with Pink Logo (New born)"
                           skuReference="Commerce Layer 01"
                           skuImageUrl="https://img.commercelayer.io/skus/BABYONBU000000E63E74.png?fm=jpg&q=90"
                           AvailabilityMessageContainerId="availability-message-BABYONBU000000E63E74NBXX" />

          <CLayer.AvailabilityMessageContainer id="availability-message-BABYONBU000000E63E74NBXX" />

          <hr/>

          <CLayer.Price skuCode="BABYONBU000000E63E746MXX"/>

          <CLayer.AddToBag skuCode="BABYONBU000000E63E746MXX"
                           skuName="Black Baby Onesie Short Sleeve with Pink Logo (6 Months)"
                           skuReference="Commerce Layer 02"
                           skuImageUrl="https://img.commercelayer.io/skus/BABYONBU000000E63E74.png?fm=jpg&q=90"
                           AvailabilityMessageContainerId="availability-message-BABYONBU000000E63E746MXX" />

          <CLayer.AvailabilityMessageContainer id="availability-message-BABYONBU000000E63E746MXX" />

          <hr/>

          <CLayer.Price skuCode="BABYONBU000000E63E7412MX"/>

          <CLayer.AddToBag skuCode="BABYONBU000000E63E7412MX"
                           skuName="Black Baby Onesie Short Sleeve with Pink Logo (12 Months)"
                           skuReference="Commerce Layer 03"
                           skuImageUrl="https://img.commercelayer.io/skus/BABYONBU000000E63E74.png?fm=jpg&q=90"
                           AvailabilityMessageContainerId="availability-message-BABYONBU000000E63E7412MX" />

          <CLayer.AvailabilityMessageContainer id="availability-message-BABYONBU000000E63E7412MX" />

          <hr/>

          <dl>
            <dt>Items</dt>
            <dd><CLayer.ShoppingBagItemsCount /></dd>
            <dt>Subtotal</dt>
            <dd><CLayer.ShoppingBagSubtotal /></dd>
            <dt>Shipping</dt>
            <dd><CLayer.ShoppingBagShipping /></dd>
            <dt>Payment</dt>
            <dd><CLayer.ShoppingBagPayment /></dd>
            <dt>Discount</dt>
            <dd><CLayer.ShoppingBagDiscount /></dd>
            <dt>Taxes</dt>
            <dd><CLayer.ShoppingBagTaxes /></dd>
            <dt>Total</dt>
            <dd><CLayer.ShoppingBagTotal /></dd>
          </dl>

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

          <CLayer.AvailabilityMessageUnavailableTemplate
            unavailableTemplate={
              <p>Not Available</p>
            }
          />

          <CLayer.Config
            baseUrl="https://static-commerce.commercelayer.io"
            clientId="351020e9c84f2076755083f08bfe8e47365a76395db1059c3219c37abff86534"
            marketId="185"
            countryCode="US"
            languageCode="en"
            cartUrl="https://example.com/cart"
            returnUrl="https://example.com/return"
            privacyUrl="https://example.com/privacy"
            termsUrl="https://example.com/terms" />
        </div>
      </Layout>
    )
  }
}
```

### Product page (radio)

```jsx
import React, { Component } from 'react'
import Layout from "../components/layout"
import * as CLayer from 'commercelayer-react'

export default class App extends Component {

  render () {
    return (
      <Layout>
        <div>
          <CLayer.Price skuCode="BABYONBU000000E63E74NBXX" id="price"/>

          <ul>
            <li>
              <CLayer.VariantRadio skuCode="BABYONBU000000E63E74NBXX"
                                   skuName="Black Baby Onesie Short Sleeve with Pink Logo (New born)"
                                   skuReference="Commerce Layer 01"
                                   skuImageUrl="https://img.commercelayer.io/skus/BABYONBU000000E63E74.png?fm=jpg&q=90"
                                   PriceContainerId="price"
                                   AvailabilityMessageContainerId="availability-message"
                                   AddToBagId="add-to-bag"
                                   text="New born" />
            </li>
            <li>
            <CLayer.VariantRadio skuCode="BABYONBU000000E63E746MXX"
                                 skuName="Black Baby Onesie Short Sleeve with Pink Logo (6 Months)"
                                 skuReference="Commerce Layer 02"
                                 skuImageUrl="https://img.commercelayer.io/skus/BABYONBU000000E63E74.png?fm=jpg&q=90"
                                 PriceContainerId="price"
                                 AvailabilityMessageContainerId="availability-message"
                                 AddToBagId="add-to-bag"
                                 text="6 Months" />
            </li>
            <li>
            <CLayer.VariantRadio skuCode="BABYONBU000000E63E7412MX"
                                 skuName="Black Baby Onesie Short Sleeve with Pink Logo (16 Months)"
                                 skuReference="Commerce Layer 03"
                                 skuImageUrl="https://img.commercelayer.io/skus/BABYONBU000000E63E74.png?fm=jpg&q=90"
                                 PriceContainerId="price"
                                 AvailabilityMessageContainerId="availability-message"
                                 AddToBagId="add-to-bag"
                                 text="12 Months" />
            </li>
          </ul>

          <hr/>
          <CLayer.AddToBag id="add-to-bag"
                           AvailabilityMessageContainerId="availability-message" />

          <CLayer.AvailabilityMessageContainer id="availability-message" />

          <CLayer.AvailabilityMessageAvailableTemplate
            availableTemplate={
              <p>Available in <CLayer.AvailabilityMessageMinDays />-<CLayer.AvailabilityMessageMaxDays /> days with <CLayer.AvailabilityMessageShippingMethodName /> (<CLayer.AvailabilityMessageShippingMethodPrice/>)</p>
            }
          />
          <CLayer.AvailabilityMessageUnavailableTemplate
            unavailableTemplate={
              <p>Not Available</p>
            }
          />
          <hr/>

          <dl>
            <dt>Items</dt>
            <dd><CLayer.ShoppingBagItemsCount /></dd>
            <dt>Subtotal</dt>
            <dd><CLayer.ShoppingBagSubtotal /></dd>
            <dt>Shipping</dt>
            <dd><CLayer.ShoppingBagShipping /></dd>
            <dt>Payment</dt>
            <dd><CLayer.ShoppingBagPayment /></dd>
            <dt>Discount</dt>
            <dd><CLayer.ShoppingBagDiscount /></dd>
            <dt>Taxes</dt>
            <dd><CLayer.ShoppingBagTaxes /></dd>
            <dt>Total</dt>
            <dd><CLayer.ShoppingBagTotal /></dd>
          </dl>

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
            baseUrl="https://static-commerce.commercelayer.io"
            clientId="351020e9c84f2076755083f08bfe8e47365a76395db1059c3219c37abff86534"
            marketId="185"
            countryCode="US"
            languageCode="en"
            cartUrl="https://example.com/cart"
            returnUrl="https://example.com/return"
            privacyUrl="https://example.com/privacy"
            termsUrl="https://example.com/terms" />
        </div>
      </Layout>
    )
  }
}
```

### Product page (select)

```jsx
import React, { Component } from 'react'
import Layout from "../components/layout"
import * as CLayer from 'commercelayer-react'

export default class App extends Component {

  render () {
    return (
      <Layout>
        <div>
          <CLayer.Price skuCode="BABYONBU000000FFFFFFNBXX" id="price"/>

          <CLayer.VariantSelect
            PriceContainerId="price"
            AvailabilityMessageContainerId="availability-message"
            AddToBagId="add-to-bag"
            skus={[{
                    code: "BABYONBU000000FFFFFFNBXX",
                    name: "Black Baby Onesie Short Sleeve with White Logo (New born)",
                    label: "New born"
                  },
                  {
                    code: "BABYONBU000000FFFFFF6MXX",
                    name: "Black Baby Onesie Short Sleeve with White Logo (6 Months)",
                    label: "6 Months"
                  },
                  {
                    code: "BABYONBU000000FFFFFF12MX",
                    name: "Black Baby Onesie Short Sleeve with White Logo (12 Months)",
                    label: "12 Months"
                  }]} />

          <hr/>
          <CLayer.AddToBag id="add-to-bag"
                           AvailabilityMessageContainerId="availability-message" />

          <CLayer.AvailabilityMessageContainer id="availability-message" />

          <CLayer.AvailabilityMessageAvailableTemplate
            availableTemplate={
              <p>Available in <CLayer.AvailabilityMessageMinDays />-<CLayer.AvailabilityMessageMaxDays /> days with <CLayer.AvailabilityMessageShippingMethodName /> (<CLayer.AvailabilityMessageShippingMethodPrice/>)</p>
            }
          />
          <CLayer.AvailabilityMessageUnavailableTemplate
            unavailableTemplate={
              <p>Not Available</p>
            }
          />
          <hr/>

          <dl>
            <dt>Items</dt>
            <dd><CLayer.ShoppingBagItemsCount /></dd>
            <dt>Subtotal</dt>
            <dd><CLayer.ShoppingBagSubtotal /></dd>
            <dt>Shipping</dt>
            <dd><CLayer.ShoppingBagShipping /></dd>
            <dt>Payment</dt>
            <dd><CLayer.ShoppingBagPayment /></dd>
            <dt>Discount</dt>
            <dd><CLayer.ShoppingBagDiscount /></dd>
            <dt>Taxes</dt>
            <dd><CLayer.ShoppingBagTaxes /></dd>
            <dt>Total</dt>
            <dd><CLayer.ShoppingBagTotal /></dd>
          </dl>

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
            baseUrl="https://static-commerce.commercelayer.io"
            clientId="351020e9c84f2076755083f08bfe8e47365a76395db1059c3219c37abff86534"
            marketId="185"
            countryCode="US"
            languageCode="en"
            cartUrl="https://example.com/cart"
            returnUrl="https://example.com/return"
            privacyUrl="https://example.com/privacy"
            termsUrl="https://example.com/terms" />
        </div>
      </Layout>
    )
  }
}
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
