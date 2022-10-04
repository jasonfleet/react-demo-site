import { INDEXES_ORDER, Order } from "./Order"

export const INDEXES_ORGANIZATION = {
  school_URN: 0,
  organization_name: 1,
  organization_telephone: 2,
  organization_email: 3,
  organization_url: 4,
}

export class Organization {

  schoolUrn = ''
  organization_name = ''
  organization_telephone = ''
  organization_email = ''
  organization_url = ''

  orders: Array<Order> = []

  public addOrder(data: Array<string>) {
    let order = this.orders.find((order: Order, index: number) => {
      return order.order_id === data[INDEXES_ORDER.order_id]
    })

    if (order === undefined) {
      order = new Order()
      order.extract(data)
    }

    order.addProduct(data)
  }

  public extract(data: Array<string>) {
    this.schoolUrn = data[INDEXES_ORGANIZATION.school_URN]
    this.organization_name = data[INDEXES_ORGANIZATION.organization_name]
    this.organization_telephone = data[INDEXES_ORGANIZATION.organization_telephone]
    this.organization_email = data[INDEXES_ORGANIZATION.organization_email]
    this.organization_url = data[INDEXES_ORGANIZATION.organization_url]
  }
}
