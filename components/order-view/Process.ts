import { INDEXES_ORGANIZATION, Organization } from "./Organization"


export class Process {

  public organizations: Array<Organization> = []

  public processOrdersCsv(csvText: string) {
    let rows = csvText.split('\n')

    rows.shift()

    rows.forEach((value: string, index: number) => {
      let data = value.split(',')

      if (data.length === 27) {
        let organization = this.organizations.find((organization: Organization, index: number) => {
          return organization.schoolUrn === data[INDEXES_ORGANIZATION.school_URN]
        })

        if (organization === undefined) {
          organization = new Organization()

          this.organizations.push(organization)

          organization.extract(data)
        }

        organization.addOrder(data)
      }

    })

    console.log(this.organizations)
  }
}
