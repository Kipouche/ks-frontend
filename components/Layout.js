import Head from 'next/head'
import Link from 'next/link'

const Layout = ({ children }) => {
  /*
   * Added this to toggle the is-active class. See:
   * 
   * https://bulma.io/documentation/components/navbar/#navbar-menu
   * https://github.com/jgthms/bulma/issues/856
   */
  const toggleStyles = (event) => {
    document.querySelector('#burger').classList.toggle('is-active')
    document.querySelector('#navbarmenu').classList.toggle('is-active')
  }

  return (
    <>
      <Head>
        <title>KeyServices</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item">
              <img src="/logo.png" />
            </a>
            <a id="burger" onClick={toggleStyles}
              role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarmenu">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div id="navbarmenu" className="navbar-menu">
            <div className="navbar-start">
              <Link href="/">
                <a className="navbar-item">Home</a>
              </Link>
              <Link href="/elsewhere">
                <a className="navbar-item">Elsewhere</a>
              </Link>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a onClick={() => alert('You clicked the button!')} className="button is-primary">Click</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main className="container">
          {children}
      </main>
      <footer className="footer">
        <div className="content has-text-centered">
          <span>I'm the footer</span>
        </div>
      </footer>
    </>
  )
}

export default Layout