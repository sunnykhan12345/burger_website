
import Layouts from '../../components/Layouts/Layouts'
import Section1 from './Section1';
import "././../../styles/HomeStyle.css"
import Section2 from '../Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';

const Home = () => {
  return (
      <>
        <Layouts>
          {/* Home Section Hero Banner */}
          <Section1/>

          {/* home section 2 about */}
          <Section2/>
          {/* home  menu section 3  */}
          <Section3/>
          {/* section 4  */}
         <Section4/>

         {/* section 5 */}
         <Section5/>
       
       
        </Layouts>
      </>
  )
}

export default Home
