import Navigation from './Components/Navigation'
import Wikipane from './Components/Wikipane'
import Searchbar from './Components/Searchbar'
function App() {
  return (  
    <>
      <div className='topElements flex flex-row flex-auto'>
          <Wikipane></Wikipane>
          <Navigation></Navigation>
      </div>
      <Searchbar></Searchbar>
    </>
  )
}

export default App
