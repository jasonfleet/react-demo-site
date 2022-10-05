import { AnyObject } from 'immer/dist/internal'
import { MouseEvent, Ref, useState } from 'react'
import Layout from '../components/layout'
import { Organization } from '../components/order-view/Organization'
import OrderView from '../components/order-view/OrderView'
import { Process } from '../components/order-view/Process'

const Slick = () => {

  const [file, setFile] = useState<AnyObject | null>(null)
  const [organizations, setOrganizations] = useState<Array<Organization>>([])

  const process = () => {
    let fileReader = new FileReader

    fileReader.onloadend = () => {
      let process = new Process()

      if (fileReader !== null && fileReader.result !== null) {
        let result = fileReader.result.toString()

        process.processOrdersCsv(result)

        setOrganizations(process.organizations)
      }
    }

    if (file !== null) {
      fileReader.readAsText(file.files[0])
    }
  }

  return <Layout>
    <>
      <div className='title'>Slick Order View</div>

      <div className='grid justify-center'>
        <form className='contact-form'>
          <div className='grid justify-center gap-4'>

            <div>
              <div className='contact-block'>
                <p><label htmlFor='file-upload'>Test Orders File</label></p>
                <input
                  id='file-upload'
                  name='file-upload'
                  type="file"
                  accept=".csv"
                  ref={(ref) => setFile(ref)}
                  onChange={() => { process() }}
                />

                {/* <div className='contact-block'>
                <button
                  className='bg-white px-2 py-1 rounded border'
                  disabled={isSubmitting}
                  onClick={(e: MouseEvent<HTMLButtonElement>) => submit(e)}
                  type='submit'
                >
                  Process
                </button>
              </div> */}
              </div>
            </div>

          </div>
        </form>
      </div>
      <div>
        {
          organizations.map((organization: Organization, index: number) => <OrderView key={'order-view-' + index} organization={organization} />)

        }
      </div>
    </>
  </Layout>
}

export default Slick
