import React, {useState, useEffect, useRef, useContext, /*useMemo*/} from 'react'
import reactImage from './logo.svg'
import './index.css'
import './class.css'
import allContextFacorys from './components/allConext'




function Function(props) {

  return (
    <div className="App">
      <h1 className='Father'>function</h1>
          <FunctionState/>
          
          <Evenets/>

          <EvenetsWithState/>

          <Forms/>

          <Oop/>

          <UseEffect/>

          <Ref/>

          <PorosAndAPI/>

          <ConditionalRendering/>

          <Fragment/>

          <MyContext/>

          {/* <UseMemo/> */}

          <ReactIamge/>

          
    </div>
  );
}

function FunctionState(){
  const [stete1, stete2] = useState('i am state transfaird by props')
  const change = () =>{
    stete2('see i told you')
  }
  return(
    <PropsAndState onClick={change} stateProps={stete1}/>
  )
}

function Evenets(props){
  const lala = () => {
    console.log('event fierd from function')
  }
  return(
    <div>
      <button onClick={lala}>
        Event
      </button>
    </div>
  )
}

function PropsAndState(props){
  return(
    <h1 onClick={props.onClick}>
      {props.stateProps}
    </h1>
  )
}

function EvenetsWithState(){
  const [{lolo, zozo}, changeLoloTo] = useState({lolo: 'lolo', zozo: 'zozo'})
  const changeLolo = () =>{
    changeLoloTo(curntState => ({...curntState, lolo: 'lala', zozo: 'momo'}))
  }
  return(
    <div>
      <button onClick={changeLolo}>change lolo And zozo</button>
      <p>{lolo}</p>
      <p>{zozo}</p>
    </div>
  )
}

function Forms(){
  const [{formValue, textareaValue , selectValue}, changeValue] = useState({formValue: '', textareaValue: '', selectValue: '1'})
  const formSubmit = (e) =>{
    e.preventDefault()
    console.log(`
      form Value => ${formValue}
      textarea Value => ${textareaValue}
      select value => ${selectValue}
    `)
  }
  const formChanged = (e) => {

    switch(e.target.tagName){
      case 'INPUT': changeValue(curntState => ({...curntState, formValue: e.target.value}))
      break;
      case 'TEXTAREA': changeValue(curntState => ({...curntState , textareaValue: e.target.value}))
      break;
      case 'SELECT': changeValue(curntState => ({...curntState, selectValue: e.target.value}))
      break;
      default: e.target.tagName = ''
    }
  }
  return(
    <div>
      <form onSubmit={formSubmit}>
        <input onChange={formChanged} type="text"/>
        <textarea onChange={formChanged}></textarea>
        <select onChange={formChanged}>
          <option defaultValue='1'>1</option>
          <option defaultValue='2'>2</option>
          <option defaultValue='3'>3</option>
        </select>
        <input type="submit"/>
      </form>
    </div>
  )
}

function Oop(){
  const value = (value) => (e) => {
    e.target.textContent = value
  }
  const defaultValue = (value) => (e) =>{
    e.target.textContent = `hover me ${value}`
  }
    return(
      <div>
        OOP
        <p onMouseOver={value('i am the object number 1')} onMouseLeave={defaultValue('1')}>hover me</p>
        <p onMouseOver={value('i am the object number 2')} onMouseLeave={defaultValue('2')}>hover me</p>
        <p onMouseOver={value('i am the object number 3')} onMouseLeave={defaultValue('3')}>hover me</p>
      </div>
    )
}


function UseEffect(){
  const [{buttonText, counter}, changeTxtx] = useState({
    buttonText :'click me to see what use effct do',
    counter: 0
  })
  useEffect(()=>{
    console.log(`
    hi am useEffct and and i have multible jobs
    1- i am like => (window.onload)
    2- i will fired my self agine in every update
    `)
  }, [])
  useEffect(()=>{
      if(counter > 0){
        console.log('the button update the text')
      }
      changeTxtx(curntState => ({...curntState, counter: curntState.counter + 1}))
      return
  }, [buttonText])
  return(
    <div>
      <p>open the console to see how useEffct works</p>
      <button onClick={() => changeTxtx(curntState => ({...curntState, buttonText: 'useEffct send the Update in the console'}))}>{buttonText}</button>
    </div>
  )
}

function Ref(){
  const div = useRef()
  useEffect(()=>{
    div.current.textContent = 'i am a value come frome useRef'
  }, [])
  return (
    <div ref={div}></div>
  )
}


const foods = [
  {key: 0, name: 'chicken', spicy: 'yes', Calories: '720'},
  {key: 1, name: 'Salad', spicy: 'no', Calories: '150'},
  {key: 2, name: 'Bean', spicy: 'no', Calories: '257'}
]
const drinks = [
  {key: 0, name: 'coffee', hotness: 'Hot'},
  {key: 1, name: 'Lemonade', hotness: 'cold'},
  {key: 2, name: 'tea', hotness: 'Hot'}
]


function Foods(props){
  return(
    <div>
        <p>mail name: {props.name}</p>
        <p>Calories: {props.Calories}</p>
        <p>is it spicy: {props.spicy}</p>
        <br/>
    </div>
  )
}

const Drinks = (props) =>{
  return(
    <div>
        <p>drink name: {props.name}</p>
        <p>drink hotness: {props.hotness}</p>
        <br/>
    </div>
  )
}

const PorosAndAPI = () => {
  return(
    <div>
      <h1>food</h1>
        {foods.map(value=>{
            return <Foods key={value.key} name={value.name} Calories={value.Calories} spicy={value.spicy}/>
        })}
      <h1>drink</h1>
        {drinks.map(value=>{
          return <Drinks key={value.key} name={value.name} hotness={value.hotness}/>
        })}
    </div>
  )
}

const render = 'div1'
const username = 'karim'
const ConditionalRendering = () =>{
  if(render === 'div1'){
      return(
          <div>this is div1
              {(()=>{
                  if(username === 'yousuf'){
                      return (
                        <div>you are Yousuf</div>
                      )
                  } else {
                      return (
                        <div>you are not Yousuf</div>
                      )
                  }
              })()}
          </div>
      )
    } else {
        return(
            <div>this is not div one</div>
        )
    }
}

const Fragment = () => {
      return (
          <div>
              <h1>Fragment</h1>
              <p>Fragment 1</p>
              <FragmentChild/>
          </div>
      )
} 

const FragmentChild = () =>{
      return(
          <React.Fragment>
              <p>Fragment 2</p>
              <p>Fragment 3</p>
          </React.Fragment>
      )
}

function MyContext(){
  const [{childText, childChildText, buttonText}, chanegState] = useState({
    childText: 'this massge come from the father (provider)',
    childChildText: 'this massge come from the father (provider)',
    buttonText:'change text'
  })
  const changeAllText = () =>{
    chanegState(curntState => ({
      ...curntState,
      childText: 'i am a steat from the father (provider)',
      childChildText: 'i am a nother steat from the father (provider)',
      buttonText: 'text changed'
     }))
  }
  return(
    <div>
      <allContextFacorys.SucondContextFactory.Provider value={{value1: childText,value2: childChildText}}>
        <h1>Context</h1>
        <button onClick={changeAllText}>{buttonText}</button>
        <ChildContext/>
      </allContextFacorys.SucondContextFactory.Provider>
    </div>
  )
}

function ChildContext(){
  const {value1} = useContext(allContextFacorys.SucondContextFactory)
  return(
    <React.Fragment>
        <p>{value1}</p>
      <ChildChildContext/>
    </React.Fragment>
    
  )
}
function ChildChildContext(){
  const {value2} = useContext(allContextFacorys.SucondContextFactory)
  return(
    <p>{value2}</p>
  )
}

///////////////////errr
// function UseMemo(){
//   const [inputVlaue, changeInput] = useState(0)
//   const multipaly = () => {
//     setTimeout(()=>{
//       return changeInput(inputVlaue * 2)
//     }, 3000)
//   }
//   const memoInputValue = useMemo(()=>{
//       inputVlaue
//   }, [inputVlaue])
//   return(
//     <div>
//       <h1>useMemo</h1>
//       <p>write a Number and try to write it agine</p>
//       <input onChange={e => changeInput(e.target.value)}value={memoInputValue}/>
//       <button onClick={multipaly}>multipaly</button>
//     </div>
//   )
// }
///////////////////errr
const ReactIamge = () => {
    return(
        <img src={reactImage} alt="react" className="App-logo"/>
    )
}


export default Function;
