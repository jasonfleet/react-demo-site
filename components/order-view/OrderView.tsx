import { MouseEvent, useState } from 'react'

const OrderView = () => {

  return <>
    <section>
      <div className='organization'>
        <div className='data-title'>URN</div>
        <div className='data-value' title='school_URN'>114519</div>
        <div className='data-title'>Organization</div>
        <div className='data-value' title='organization_name'>PAW C Place</div>
        <div className='data-title'>Telephone</div>
        <div className='data-value' title='organization_telephone'><a href='tel:01234 567890'>01234 567890</a></div>
        <div className='data-title'>Email</div>
        <div className='data-value' title='organization_email'><a href='mailto:admin@www.pawc.s'>admin@www.pawc.s</a></div>
        <div className='data-title'>WWW</div>
        <div className='data-value' title='organization_url'><a href='http://www.pawc.s' rel='noreferrer' target='_blank'>http://www.pawc.s</a></div>
      </div>
    </section>

    <section className='order'>
      <div className='data-title'>Order&nbsp;ID</div>
      <div className='data-value' title='order_id'>1197</div>
      <div className='data-title'>Date</div>
      <div className='data-value' title='order_date'>27/06/2016 17:01:48</div>
      <div className='data-title'>Name</div>
      <div className='data-value' title='order_name'>PAW C Place</div>
      <div className='data-title'>Contact</div>
      <div className='data-value' title='order_contact_name'>Angela Unlikely</div>
      <div className='data-title'>Address</div>
      <div className='data-value' title='order_delivery_address_1,2,3'>PAW C Place, High Street</div>
      <div className='data-title'>Town</div>
      <div className='data-value' title='order_delivery_town'>Pevensey</div>
      <div className='data-title'>County</div>
      <div className='data-value' title='order_delivery_county'>East Sussex</div>
      <div className='data-title'>Postcode</div>
      <div className='data-value' title='order_delivery_postcode'>AB12 3CD</div>
      <div className='data-title'>Email</div>
      <div className='data-value' title='order_email_address'><a href='mailto:a.unlikely@pawc.s'>a.unlikely@pawc.s</a></div>
      <div className='data-title'>Telephone</div>
      <div className='data-value' title='order_telephone'><a href='tel:01234 567890'>01234 567890</a></div>
      <div className='data-title'>Bulk&nbsp;Total</div>
      <div className='data-value' title='organization_bulk_order_total'>325.00</div>
    </section>

    <section className='lines'>

      <div className='data-header'>Style</div>
      <div className='data-header'>Product</div>
      <div className='data-header'>Colour</div>
      <div className='data-header'>Size</div>
      <div className='data-header'>Barcode</div>
      <div className='data-header monies'>Price</div>
      <div className='data-header monies'>Quantity</div>
      <div className='data-header monies'>Total</div>
      <div className='data-header'>Image</div>

      <div className='data-title'>Style</div>
      <div className='data-value' title='product_colour_style_ref'>A0123456</div>
      <div className='data-title'>Product</div>
      <div className='data-value' title='product_name'>Round-Neck Sweat (Unisex)</div>
      <div className='data-title'>Colour</div>
      <div className='data-value' title='product_colour_name'>Red</div>
      <div className='data-title'>Size</div>
      <div className='data-value' title='product_size_name'>8/9</div>
      <div className='data-title'>Barcode</div>
      <div className='data-value' title='product_ean'>5012345678905</div>
      <div className='data-title'>Price</div>
      <div className='data-value monies' title='product_price'>7.50</div>
      <div className='data-title'>Quantity</div>
      <div className='data-value monies' title='product_quantity'>10</div>
      <div className='data-title'>Total</div>
      <div className='data-value monies' title='product_line_price'>75.00</div>
      <div className='line-image' title='product_colour_image_url'>
        <div>

          <img
            alt='Round-Neck Sweat (Unisex)'
            src='https://dummyimage.com/210x280/ff0000/f8f8f8.png&text=Round-Neck+Sweat+(Unisex)'
            srcSet='https://dummyimage.com/180x240/ff0000/f8f8f8.png&text=Round-Neck+Sweat+(Unisex) 180w, https://dummyimage.com/210x280/ff0000/f8f8f8.png&text=Round-Neck+Sweat+(Unisex) 210w'
            sizes='(max-width: 210px) 180px, 210px' />
        </div>
        <div>Hover</div>
      </div>

      <div className='data-title'>Style</div>
      <div className='data-value' title='product_colour_style_ref'>A1234567</div>
      <div className='data-title'>Product</div>
      <div className='data-value' title='product_name'>Embroidered Jersey Cardigan</div>
      <div className='data-title'>Colour</div>
      <div className='data-value' title='product_colour_name'>Red</div>
      <div className='data-title'>Size</div>
      <div className='data-value' title='product_size_name'>5/6</div>
      <div className='data-title'>Barcode</div>
      <div className='data-value' title='product_ean'>5012345678904</div>
      <div className='data-title'>Price</div>
      <div className='data-value monies' title='product_price'>8.00</div>
      <div className='data-title'>Quantity</div>
      <div className='data-value monies' title='product_quantity'>10</div>
      <div className='data-title'>Total</div>
      <div className='data-value monies' title='product_line_price'>80.00</div>
      <div className='line-image' title='product_colour_image_url'>
        <div>
          <img
            alt='Embroidered Jersey Cardigan'
            src='https://dummyimage.com/210x280/ff0000/f8f8f8.png&text=Embroidered+Jersey+Cardigan'
            srcSet='https://dummyimage.com/180x240/ff0000/f8f8f8.png&text=Embroidered+Jersey+Cardigan 180w, https://dummyimage.com/210x280/ff0000/f8f8f8.png&text=Embroidered+Jersey+Cardigan 210w'
            sizes='(max-width: 210px) 180px, 210px' />
        </div>
        <div>Hover</div>
      </div>

      <div className='data-title'>Style</div>
      <div className='data-value' title='product_colour_style_ref'>A1234567</div>
      <div className='data-title'>Product</div>
      <div className='data-value' title='product_name'>Embroidered Jersey Cardigan</div>
      <div className='data-title'>Colour</div>
      <div className='data-value' title='product_colour_name'>Red</div>
      <div className='data-title'>Size</div>
      <div className='data-value' title='product_size_name'>8/9</div>
      <div className='data-title'>Barcode</div>
      <div className='data-value' title='product_ean'>5012345678903</div>
      <div className='data-title'>Price</div>
      <div className='data-value monies' title='product_price'>8.00</div>
      <div className='data-title'>Quantity</div>
      <div className='data-value monies' title='product_quantity'>10</div>
      <div className='data-title'>Total</div>
      <div className='data-value monies' title='product_line_price'>80.00</div>
      <div className='line-image' title='product_colour_image_url'>
        <div>
          <img
            alt='Embroidered Jersey Cardigan'
            src='https://dummyimage.com/210x280/ff0000/f8f8f8.png&text=Embroidered+Jersey+Cardigan'
            srcSet='https://dummyimage.com/180x240/ff0000/f8f8f8.png&text=Embroidered+Jersey+Cardigan 180w, https://dummyimage.com/210x280/ff0000/f8f8f8.png&text=Embroidered+Jersey+Cardigan 210w'
            sizes='(max-width: 210px) 180px, 210px' />
        </div>
        <div>Hover</div>
      </div>

      <div className='data-title'>Style</div>
      <div className='data-value' title='product_colour_style_ref'>A2345678</div>
      <div className='data-title'>Product</div>
      <div className='data-value' title='product_name'>Polo Shirt (Unisex)</div>
      <div className='data-title'>Colour</div>
      <div className='data-value' title='product_colour_name'>White</div>
      <div className='data-title'>Size</div>
      <div className='data-value' title='product_size_name'>6/7</div>
      <div className='data-title'>Barcode</div>
      <div className='data-value' title='product_ean'>5012345678902</div>
      <div className='data-title'>Price</div>
      <div className='data-value monies' title='product_price'>4.50</div>
      <div className='data-title'>Quantity</div>
      <div className='data-value monies' title='product_quantity'>10</div>
      <div className='data-title'>Total</div>
      <div className='data-value monies' title='product_line_price'>45.00</div>
      <div className='line-image' title='product_colour_image_url'>
        <div>
          <img
            alt='Polo Shirt Unisex)'
            src='https://dummyimage.com/210x280/fefefe/080808.png&text=Polo+Shirt+(Unisex)'
            srcSet='https://dummyimage.com/180x240/fefefe/080808.png&text=Polo+Shirt+(Unisex) 180w, https://dummyimage.com/210x280/fefefe/080808.png&text=Polo+Shirt+(Unisex) 210w'
            sizes='(max-width: 210px) 180px, 210px' />
        </div>
        <div>Hover</div>
      </div>

      <div className='data-title'>Style</div>
      <div className='data-value' title='product_colour_style_ref'>A2345678</div>
      <div className='data-title'>Product</div>
      <div className='data-value' title='product_name'>Polo Shirt (Unisex)</div>
      <div className='data-title'>Colour</div>
      <div className='data-value' title='product_colour_name'>White</div>
      <div className='data-title'>Size</div>
      <div className='data-value' title='product_size_name'>10/11</div>
      <div className='data-title'>Barcode</div>
      <div className='data-value' title='product_ean'>5012345678901</div>
      <div className='data-title'>Price</div>
      <div className='data-value monies' title='product_price'>4.50</div>
      <div className='data-title'>Quantity</div>
      <div className='data-value monies' title='product_quantity'>10</div>
      <div className='data-title'>Total</div>
      <div className='data-value monies' title='product_line_price'>45.00</div>
      <div className='line-image' title='product_colour_image_url'>
        <div>
          <img
            alt='Polo Shirt Unisex)'
            src='https://dummyimage.com/210x280/fefefe/080808.png&text=Polo+Shirt+(Unisex)'
            srcSet='https://dummyimage.com/180x240/fefefe/080808.png&text=Polo+Shirt+(Unisex) 180w, https://dummyimage.com/210x280/fefefe/080808.png&text=Polo+Shirt+(Unisex) 210w'
            sizes='(max-width: 210px) 180px, 210px' />
        </div>
        <div>Hover</div>
      </div>

    </section>
  </>

}

export default OrderView
