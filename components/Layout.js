import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <>
      <div className="container">
      <div className="myname">
        <h6>Developed by: Kishore Saha</h6>
        <span>Frontend: Next.js   </span> <br></br>
        <span>Backend: Contentful api</span>
    </div>

      </div>
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              
              <span>Just Add</span>
              <span>Marmite</span>
            </h1>
            <h2>Spread The Joy</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>Copyright 2021 Just Add Marmite </p>
      </footer>
    </div>
    </>
  )
}