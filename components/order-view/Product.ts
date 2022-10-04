export const INDEXES_PRODUCT = {
  product_colour_style_ref: 18,
  product_name: 19,
  product_colour_name: 20,
  product_size_name: 21,
  product_colour_image_url: 22,
  product_ean: 23,
  product_price: 24,
  product_quantity: 25,
  product_line_price: 26
}

export class Product {
  product_colour_style_ref = ''
  product_name = ''
  product_colour_name = ''
  product_size_name = ''
  product_colour_image_url = ''
  product_ean = ''
  product_price = ''
  product_quantity = ''
  product_line_price = ''

  public extract(data: Array<string>) {
    this.product_colour_style_ref = data[INDEXES_PRODUCT.product_colour_style_ref]
    this.product_name = data[INDEXES_PRODUCT.product_name]
    this.product_colour_name = data[INDEXES_PRODUCT.product_colour_name]
    this.product_size_name = data[INDEXES_PRODUCT.product_size_name]
    this.product_colour_image_url = data[INDEXES_PRODUCT.product_colour_image_url]
    this.product_ean = data[INDEXES_PRODUCT.product_ean]
    this.product_price = data[INDEXES_PRODUCT.product_price]
    this.product_quantity = data[INDEXES_PRODUCT.product_quantity]
    this.product_line_price = data[INDEXES_PRODUCT.product_line_price]
  }
}
