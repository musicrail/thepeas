import * as React from 'react'
import { Link } from 'gatsby'
import { 
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle
} from './layout.module.css'
import { useSiteMetadata } from './customHooks'

const Layout = ({ pageTitle, children }) => {
  const metadata = useSiteMetadata()
  return (
    <div className={container}>
      <header className={siteTitle}>{metadata}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to='/' className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to='/about' className={navLinkText}>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
          {children}
      </main>
    </div>
  )
}

export default Layout