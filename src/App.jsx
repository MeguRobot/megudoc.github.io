import Navigation from './Components/Navigation'
import Wikipane from './Components/Wikipane'
function App() {
  return (  
    <>
      <div className='topElements flex flex-row flex-auto'>
          <Wikipane></Wikipane>
          <Navigation></Navigation>
      </div>
    </>
  )
}

export default App
