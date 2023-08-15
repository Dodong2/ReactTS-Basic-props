import './App.css'
import Card from './component/card'//dito ay import ang file na card.tsx at pangalan na variable ay Card
//step1 make sure gumawa ng file na component na mayroon laman na file na palangalan ay card.tsx


function App() {

  return (
    <>
      <div className='Main-body'>
        <Card name="Dodong" age={20} gender="Male" title="Palayaw"/>
        <Card name="Dodongskie" age={20} gender="Male" title='IGN'/>
        <Card name="Dongskie" age={20} gender="Male" title="Called"/>
        <Card name="Carl" age={20} gender="Male" title="Pogi"/>
      </div>
    </>
  )
}

export default App

/* Paliwanag sa Lahat */
/* yung function App() {
  return (
    <>
      <div className='Main-body'>
        component 1 - <Card name="Dodong" age={20} gender="Male" title="Palayaw"/>
        component 2 - <Card name="Dodongskie" age={20} gender="Male" title='IGN'/>
        component 3 - <Card name="Dongskie" age={20} gender="Male" title="Called"/>
        component 4 - <Card name="Carl" age={20} gender="Male" title="Pogi"/> 
      </div>
      </>
    )
  } 
   ang tawag dyan ay main functional component na ang pangalan ay "App"
   kung saan ay nag rereturn siya ng JSX code na mag re-render sa DOM,
   ang nilalaman ng card components ay different value na nakalagay 
   kay bawat <Card/> components at ang kanilang mga types ay nanggagaling
   kay card.tsx kung saan ay ni render natin ang kanyang:

          <h1>{title} card</h1>
          <div>Name: {name}</div>
          <div>age: {age}</div>
          <div>Gender: {gender}</div>

          sa mismong main functional component natin.
          proceed sa card.tsx
  */
