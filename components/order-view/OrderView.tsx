import Image from 'next/image'
import { Order } from './Order'
import { Organization } from './Organization'
import { Product } from './Product'

interface OrderViewInterface {
  organization: Organization
}

const OrderView = ({ organization }: OrderViewInterface) => {

  return <div>
    <section>
      <div className='organization'>
        <div className='data-title'>URN</div>
        <div className='data-value' title='school_URN'>{organization.schoolUrn}</div>
        <div className='data-title'>Organization</div>
        <div className='data-value' title='organization_name'>{organization.organization_name}</div>
        <div className='data-title'>Telephone</div>
        <div className='data-value' title='organization_telephone'><a href={'tel:' + organization.organization_telephone}>{organization.organization_telephone}</a></div>
        <div className='data-title'>Email</div>
        <div className='data-value' title='organization_email'><a href={'mailto:' + organization.organization_email}>{organization.organization_email}</a></div>
        <div className='data-title'>WWW</div>
        <div className='data-value' title='organization_url'><a href={organization.organization_url} rel='noreferrer' target='_blank'>{organization.organization_url}</a></div>
      </div>
    </section>

    {
      organization.orders.map((order: Order, index: number) =>
        <>
          <section key={'order-' + index} className='order'>
            <div className='data-title'>Order&nbsp;ID</div>
            <div className='data-value' title='order_id'>{order.order_id}</div>
            <div className='data-title'>Date</div>
            <div className='data-value' title='order_date'>{order.order_date}</div>
            <div className='data-title'>Name</div>
            <div className='data-value' title='order_name'>{order.order_name}</div>
            <div className='data-title'>Contact</div>
            <div className='data-value' title='order_contact_name'>{order.order_contact_name}</div>
            <div className='data-title'>Address</div>
            <div className='data-value' title='order_delivery_address_1,2,3'>{order.order_delivery_address_1 + ', ' + order.order_delivery_address_2 + ', ' + order.order_delivery_address_3}</div>
            <div className='data-title'>Town</div>
            <div className='data-value' title='order_delivery_town'>{order.order_delivery_town}</div>
            <div className='data-title'>County</div>
            <div className='data-value' title='order_delivery_county'>{order.order_delivery_county}</div>
            <div className='data-title'>Postcode</div>
            <div className='data-value' title='order_delivery_postcode'>{order.order_delivery_postcode}</div>
            <div className='data-title'>Email</div>
            <div className='data-value' title='order_email_address'><a href={'mailto:' + order.order_email_address}></a>{order.order_email_address}</div>
            <div className='data-title'>Telephone</div>
            <div className='data-value' title='order_telephone'><a href={'tel:' + order.order_telephone}></a>{order.order_telephone}</div>
            <div className='data-title'>Bulk&nbsp;Total</div>
            <div className='data-value' title='organization_bulk_order_total'>{order.organization_bulk_order_total}</div>
          </section>

          <section key={'product-line-' + index} className='lines'>
            <div className='data-header'>Style</div>
            <div className='data-header'>Product</div>
            <div className='data-header'>Colour</div>
            <div className='data-header'>Size</div>
            <div className='data-header'>Barcode</div>
            <div className='data-header monies'>Price</div>
            <div className='data-header monies'>Quantity</div>
            <div className='data-header monies'>Total</div>
            <div className='data-header'>Image</div>

            {order.products.map((product: Product, index: number) =>
              <>
                <div className='data-title'>Style</div>
                <div className='data-value' title='product_colour_style_ref'>{product.product_colour_style_ref}</div>
                <div className='data-title'>Product</div>
                <div className='data-value' title='product_name'>{product.product_name}</div>
                <div className='data-title'>Colour</div>
                <div className='data-value' title='product_colour_name'>{product.product_colour_name}</div>
                <div className='data-title'>Size</div>
                <div className='data-value' title='product_size_name'>{product.product_size_name}</div>
                <div className='data-title'>Barcode</div>
                <div className='data-value' title='product_ean'>{product.product_ean}</div>
                <div className='data-title'>Price</div>
                <div className='data-value monies' title='product_price'>{product.product_price}</div>
                <div className='data-title'>Quantity</div>
                <div className='data-value monies' title='product_quantity'>{product.product_quantity}</div>
                <div className='data-title'>Total</div>
                <div className='data-value monies' title='product_line_price'>{product.product_line_price}</div>
                <div className='line-image' title='product_colour_image_url'>
                  <div>
                    {'http' + product.product_colour_image_url.split('http').pop()}
                    {/* <Image
                      alt='Picture of product'
                      src={'http' + product.product_colour_image_url.split('http').pop()}
                      height='400'
                      width='400'
                    /> */}
                    {/* <img
            alt='Round-Neck Sweat (Unisex)'
            src='https://dummyimage.com/210x280/ff0000/f8f8f8.png&text=Round-Neck+Sweat+(Unisex)'
            srcSet='https://dummyimage.com/180x240/ff0000/f8f8f8.png&text=Round-Neck+Sweat+(Unisex) 180w, https://dummyimage.com/210x280/ff0000/f8f8f8.png&text=Round-Neck+Sweat+(Unisex) 210w'
            sizes='(max-width: 210px) 180px, 210px' /> */}
                  </div>
                  {/* <div>Hover</div> */}
                </div>
              </>
            )}
          </section>

        </>
      )}
  </div >

}

export default OrderView
