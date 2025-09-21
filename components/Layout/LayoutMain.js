import Footer from './Footer'
import Header from './Header'

export default function LayoutMain({children}) {
  return (
    <div>
      <Header />
      <div className='pt-[181px]'>{children}</div>
      <Footer />
    </div>
  )
}
