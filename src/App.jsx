


export function getEvents (dom)   {
  const events =  fetch ("https://eonet.gsfc.nasa.gov/api/v3/events?category=severeStorms,wildfires");
  events 
    .then(res => res.json())
    .then(data => {dom(data)});
  }

  getEvents(data =>{
    console.log(data)
  })

function App() {
  return (
    <>
    </>
  )
 
}

export default App 
