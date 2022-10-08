// Parts And Rules page
//
//

import Image from 'next/image'
import { useState } from 'react'
import Layout from '../components/layout'
import DiagramComponent from '../components/parts-n-rules/diagram'
import diagramIcon from '../public/icons/account_tree_FILL0_wght100_GRAD0_opsz48.svg'

enum States {
  Page,
  Diagram
}

function PartsAndRules() {
  const [mode, setMode] = useState<States>(States.Page)

  return <Layout>
    <div className='title mb-12'>Parts And Rules</div>

    <div className='grid justify-center'>
      <button className='button border border-slate-900 p-2 bg-amber-300 rounded-md stroke-white' onClick={() => setMode(States.Diagram)}>
        <Image alt='Diagram' src={diagramIcon} height={96} width={96} />
      </button>
      <p>Draw The Rules</p>
    </div>


    {mode === States.Diagram && <DiagramComponent />}

  </Layout>
}

export default PartsAndRules
