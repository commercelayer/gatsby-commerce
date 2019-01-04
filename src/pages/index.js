import React from "react"

import {
  Config,
  Price,
  VariantSelect,
  AvailabilityMessage,
  AvailabilityMessageMinDays,
  AvailabilityMessageMaxDays,
  AvailabilityMessageShippingMethodName,
  AvailabilityMessageShippingMethodPrice,
  AddToBag,
  ShoppingBagItemsCount,
  ShoppingBagSubtotal,
  ShoppingBagShipping,
  ShoppingBagPayment,
  ShoppingBagDiscount,
  ShoppingBagTaxes,
  ShoppingBagTotal,
  ShoppingBagItems,
  ShoppingBagItemImage,
  ShoppingBagItemName,
  ShoppingBagItemUnitAmount,
  ShoppingBagItemQtyContainer,
  ShoppingBagItemTotalAmount,
  ShoppingBagItemRemove,
  Checkout
} from 'commercelayer-react'

export default () => (
  <div>
    <hr/>
    <Price skuCode="BABYONBU000000FFFFFFNBXX"/>
    <hr/>
    <VariantSelect skus={[
      {code: "BABYONBU000000FFFFFFNBXX", name: "Black Baby Onesie Short Sleeve with White Logo (New born)", label: "New born"},
      {code: "BABYONBU000000FFFFFF6MXX", name: "Black Baby Onesie Short Sleeve with White Logo (6 Months)", label: "6 Months"},
      {code: "BABYONBU000000FFFFFF12MX", name: "Black Baby Onesie Short Sleeve with White Logo (12 Months)", label: "12 Months"}]} />
    <hr/>
    <AvailabilityMessage
      availableTemplate={
        <div>
          Available in <AvailabilityMessageMinDays />-<AvailabilityMessageMaxDays /> days with <AvailabilityMessageShippingMethodName /> (<AvailabilityMessageShippingMethodPrice/>)
        </div>
      }
      unavailableTemplate={
        <p>The selected SKU is not available</p>
      } />
    <hr/>
    <AddToBag />
    <hr/>
    <ShoppingBagItemsCount />
    <ShoppingBagSubtotal />
    <ShoppingBagShipping />
    <ShoppingBagPayment />
    <ShoppingBagDiscount />
    <ShoppingBagTaxes />
    <ShoppingBagTotal />
    <hr/>
    <ShoppingBagItems
      itemTemplate={
        <div>
          <ShoppingBagItemImage />
          <ShoppingBagItemName />
          <ShoppingBagItemUnitAmount />
          <ShoppingBagItemQtyContainer />
          <ShoppingBagItemRemove />
          <ShoppingBagItemTotalAmount />
        </div>
      }
    />
    <hr/>
    <Checkout/>
    <hr/>
    <Config
      baseUrl="https://dato-commerce.commercelayer.io"
      clientId="4105df911df6056f8bd9a233ac4edd90c9693fecfc5ecfffcba3e3ae4af45827"
      marketId="156"
      countryCode="US"
      languageCode="en"
      cartUrl="https://example.com/cart"
      returnUrl="https://example.com/return"
      privacyUrl="https://example.com/privacy"
      termsUrl="https://example.com/terms" />
  </div>
)
