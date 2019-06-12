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
        </div>
      </Layout>
    )
  }
}
