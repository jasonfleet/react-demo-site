import { INDEXES_PRODUCT, Product } from "./Product"

export const INDEXES_ORDER = {
  order_id: 5,
  order_date: 6,
  order_name: 7,
  order_contact_name: 8,
  order_email_address: 9,
  order_telephone: 10,
  order_delivery_address_1: 11,
  order_delivery_address_2: 12,
  order_delivery_address_3: 13,
  order_delivery_town: 14,
  order_delivery_county: 15,
  order_delivery_postcode: 16,
  organization_bulk_order_total: 17,
}

export class Order {
  order_id = ''
  order_date = ''
  order_name = ''
  order_contact_name = ''
  order_email_address = ''
  order_telephone = ''
  order_delivery_address_1 = ''
  order_delivery_address_2 = ''
  order_delivery_address_3 = ''
  order_delivery_town = ''
  order_delivery_county = ''
  order_delivery_postcode = ''
  organization_bulk_order_total = ''

  products: Array<Product> = []

  public addProduct(data: Array<string>) {

    let product = this.products.find((product: Product, index: number) => {
      return product.product_colour_style_ref === data[INDEXES_PRODUCT.product_colour_style_ref]
    })

    if (product === undefined) {
      product = new Product()
      product.extract(data)
    }
  }

  public extract(data: Array<string>) {
    this.order_id = data[INDEXES_ORDER.order_id]
    this.order_date = data[INDEXES_ORDER.order_date]
    this.order_name = data[INDEXES_ORDER.order_name]
    this.order_contact_name = data[INDEXES_ORDER.order_contact_name]
    this.order_email_address = data[INDEXES_ORDER.order_email_address]
    this.order_telephone = data[INDEXES_ORDER.order_telephone]
    this.order_delivery_address_1 = data[INDEXES_ORDER.order_delivery_address_1]
    this.order_delivery_address_2 = data[INDEXES_ORDER.order_delivery_address_2]
    this.order_delivery_address_3 = data[INDEXES_ORDER.order_delivery_address_3]
    this.order_delivery_town = data[INDEXES_ORDER.order_delivery_town]
    this.order_delivery_county = data[INDEXES_ORDER.order_delivery_county]
    this.order_delivery_postcode = data[INDEXES_ORDER.order_delivery_postcode]
    this.organization_bulk_order_total = data[INDEXES_ORDER.organization_bulk_order_total]
  }
}
