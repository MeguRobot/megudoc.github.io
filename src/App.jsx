import Navigation from './Components/Navigation'
import Wikipane from './Components/Wikipane'
import Maincontent from './Components/Maincontent'

import {motion} from "framer-motion"


function App() {

  return (  
    <>
      <div className='mainPage flex flex-row flex-auto'>
      <motion.div initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}>
                  <Wikipane></Wikipane>
              </motion.div>
          
            <section className='pageContent flex flex-col flex-auto'>
              <motion.div>
              <Navigation></Navigation>
              </motion.div>
              <motion.div initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}>
                  <Maincontent></Maincontent>
              </motion.div>
              
            </section>
          </div>
    </>
  )
}

export default App
