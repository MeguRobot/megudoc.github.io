import Navigation from './Components/Navigation'
import Wikipane from './Components/Wikipane'
import Maincontent from './Components/Maincontent'
function App() {
  return (  
    <>
      <div className='mainPage flex flex-row flex-auto'>
          <Wikipane></Wikipane>
            <section className='pageContent flex flex-col flex-auto'>
              <Navigation></Navigation>
              <Maincontent></Maincontent>
            </section>
          </div>
    </>
  )
}

export default App
