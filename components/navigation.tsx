
import Link from 'next/link'

function Navigation() {
  return (
    <div className=''>
      <nav>
        <Link href="/" className='nav-button'>
          Home
        </Link>

        {/* <Link href="/tickets">
          <a className='nav-button'>Tickets</a>
        </Link> */}

        <Link href="/demo-pages" className='nav-button'>
          Demo Pages
        </Link>

        <Link href="/games" className='nav-button'>
          Games
        </Link>

        <Link href="/parts-and-rules" className='nav-button'>
          Parts And Rules
        </Link>

      <Link href="/contact" className='nav-button'>
        Contact
      </Link>

      </nav>
    </div>
  );
}

export default Navigation
