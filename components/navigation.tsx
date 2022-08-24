
import Link from 'next/link'

function Navigation() {
  return (
    <div className=''>
      <nav>
        <Link href="/">
          <a className='nav-button'>Home</a>
        </Link>

        <Link href="/demo-pages">
          <a className='nav-button'>Demo Pages</a>
        </Link>

        <Link href="/games">
          <a className='nav-button'>Games</a>
        </Link>

        <Link href="/parts-and-rules">
          <a className='nav-button'>Parts And Rules</a>
        </Link>

      <Link href="/contact">
        <a className='nav-button'>Contact</a>
      </Link>

      </nav>
    </div>
  )
}

export default Navigation
