import '@/app/scss/page/_dowload.scss'

function Download() {
  return (
    <>
    <section  className="app-download">
        <div className="container">
          <div className="download-pay">
            <h2>Download the app now.</h2>
            <p>Most calendars are designed for teams. </p>
            <div className='pay-free'>
              <button className='buy'>Buy now</button>
              <button className='free'>Try for free</button>
            </div>
          </div>
        </div>
    </section>
    </>
  )
}

export default Download