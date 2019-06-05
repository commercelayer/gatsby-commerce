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
