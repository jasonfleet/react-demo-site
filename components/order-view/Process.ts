import { INDEXES_ORGANIZATION, Organization } from "./Oragnization"


export class Process {

  organizations: Array<Organization> = []

  public processOrdersCsv(csvText: string) {
    let rows = csvText.split('\n')

    rows.forEach((value: string, index: number) => {
      let data = value.split(',')

      let organization = this.organizations.find((organization: Organization, index: number) => {
        return organization.schoolUrn === data[INDEXES_ORGANIZATION.school_URN]
      })

      if (organization === undefined) {
        organization = new Organization()

        this.organizations.push(organization)

        organization.extract(data)
      }

      organization.addOrder(data)

    })

    console.log(this.organizations)
  }
}
