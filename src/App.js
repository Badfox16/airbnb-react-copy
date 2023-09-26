import './App.css';
// import Card from './components/Card';
import Contact from './components/Contacts';
// import Hero from './components/Hero';
// import Navbar from './components/Navbar';

function App() {
  const firstName= "Mutizo";

  const date = new Date();
  const hours = date.getHours();
  let time;

  if (hours<12) {
    time="dia"
  } else if (hours >= 12 && hours <17) {
    time="tarde"
  } else{
    time="noite"
  }

  return (
    <div className="container">
        {/* <Navbar/>
        <Hero/>
        <Card/> */}
        <h1>Boa {time}, {firstName}!</h1>
        <Contact
         name="Mr. Whiskerson"
         nr="(212) 555-1234"
         email="mr.whiskaz@catnap.moew"
        /> 
    </div>
  );
}

export default App;
