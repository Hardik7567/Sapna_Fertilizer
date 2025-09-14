import Footer from './Footer'
import Header from './Header'

export default function LayoutMain({children}) {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  )
}
