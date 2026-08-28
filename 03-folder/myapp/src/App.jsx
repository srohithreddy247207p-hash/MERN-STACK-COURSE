import React from 'react'
import Card from './components/card.jsx'

const App = () => {
  return (
   <div className='parent' >
     <Card user='Balu' age={21} img="https://th.bing.com/th/id/OIP.c8W4VXlo9qDYCjxs66-r5QHaNN?w=187&h=333&c=7&r=0&o=7&pid=1.7&rm=3"/>
     <Card user='Munna' age={23} img="https://img.freepik.com/premium-photo/spiderman-heroic-pose-with-webs-action_1199394-72053.jpg"/>
     <Card user='Krish' age={22} img="https://wallpapercave.com/wp/wp2377817.jpg"/>
     <Card user='Raju' age={22} img="https://wallpapers.com/images/featured/thor-qzytdg8xliuaelun.jpg"/>
   </div>
  )
}

export default App
