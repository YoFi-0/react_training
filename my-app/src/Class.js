import React, { Component }  from 'react'
import './index.css'
import './class.css'
import axois from 'axios'
import reactImage from './logo.svg'
import allContextFacorys from './components/allConext'



class ClassComponent extends Component{
    render(){
        return(
                <div className='App'>
                    <h1 className='Father'>Class</h1>
                    {/* اخذ بيانات الاستيت */}
                   <ClassState/>
                    {/* كلاس الافنت */}
                    <Evenets/>
                    {/* اختلافات الافينت و اليرو فانكسن و البيوند */}
                    <EvenetBiond />
                    {/* الايفينت مع الاستيت */}
                    <EvenetsWithState/>
                    {/* طريقة التعامل مع لالفورمات */}
                    <Forms/>

                    <Oop/>

                    <Poros/>

                    <ConditionalRendering/>

                    {/* lifeCycle*/}
                    <ConstructorAndRender/>

                    <ComponentDidMount/>

                    <ComponentDidUpdate/>
                    
                    <Ref/>

                    <API/>

                    <Fragment/>

                    <MyContext/>

                    <ReactIamge/>
                </div>
        )
    }
}

class ClassState extends Component {
    state = {
        state1: 'i am state transfaird by props click me',
    }
    change = () =>{
        this.setState({
            state1: 'see i told you'
        })
    }
    render(){
        return <PropsAndState onClick={this.change} stateProps={this.state.state1}/>
    }
}

class PropsAndState extends Component {
    render(){
        return(
            <div>
                <h1 onClick={this.props.onClick}>
                    {this.props.stateProps}
                </h1>
            </div>
        )
    }
}

class Evenets extends Component {
    lala = () => {
        console.log('event fired from class')
    }
    render(){
        return(
            <div>
                <button onClick={this.lala}>
                    Event
                </button>
            </div>
        )
    }
}

class EvenetBiond extends Component {
    state = {
        key1: 'i am bind value',
        key2: 'i am not bind value'
    }

    biond(){
        alert(this.state.key1)
    }

    notBiond = () =>{
        alert(this.state.key2)
    }

    render(){
        return(
            <div>
                <button onClick={this.biond.bind(this)}>Binond button</button>
                <button onClick={this.notBiond}>not Biond botton</button>
            </div>
        )
    }
}

class EvenetsWithState extends Component{
    state = {
        lolo: 'lolo',
        zozo: 'zozo'
    }
    chanegLoloFunc = () =>{
        this.setState({
            lolo: 'lala',
            zozo: 'momo'
        })
    }
    render(){
        return(
            <div>
                <button onClick={this.chanegLoloFunc}>change lolo And zozo</button>
                <p>{this.state.lolo}</p>
                <p>{this.state.zozo}</p>
            </div>
        )
    }
}

class Forms extends Component {
    state = {
        formValue: '',
        textareaValue: '',
        selectValue: '',
    }
    changeForm = (e) =>{
        if(e.target.tagName === 'INPUT'){
            this.setState({
                formValue: e.target.value,
            })
            console.log(e.target.tagName)
        } else if (e.target.tagName === 'TEXTAREA'){
            this.setState({
                textareaValue: e.target.value
            })
            console.log(e.target.tagName)
        }
        else if (e.target.tagName === 'SELECT'){
            this.setState({
                selectValue: e.target.value
            })
            console.log(e.target.tagName)
        }
    }
    submitForm = (e) =>{
        e.preventDefault()
        console.log(`
        form value ${this.state.formValue}
        textarea value ${this.state.textareaValue}
        select value ${this.state.selectValue}
        `)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.submitForm}>
                    <input type="text" onChange={this.changeForm}/>
                    <textarea onChange={this.changeForm}/>
                    <select onChange={this.changeForm}>
                        <option defaultValue="1">1</option>
                        <option defaultValue="2">2</option>
                        <option defaultValue="3">3</option>
                    </select>
                    <button>submit</button>
                </form>
            </div>
        )
    }
}

//oop


class Oop extends Component {
    values = (value) => (elm) =>{
        elm.target.textContent = value
    }
    render(){
        return(
            <div>
                <p>OOP</p>
                <p onClick={this.values('i am the object number 1')}>click me</p>
                <p onClick={this.values('i am the object number 2')}>click me</p>
                <p onClick={this.values('i am the object number 3')}>click me</p>
            </div>
        )
    }
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


class Foods extends Component{
    render(){
        return(
            <div>
                <p>mail name: {this.props.name}</p>
                <p>Calories: {this.props.Calories}</p>
                <p>is it spicy: {this.props.spicy}</p>
                <br/>
            </div>
        )
    }
}

class Drinks extends Component{
    render(){
        return(
            <div>
                <p>drink name: {this.props.name}</p>
                <p>drink hotness: {this.props.hotness}</p>
                <br/>
            </div>
        )
    }
}



class Poros extends Component {
    render(){
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
}


const render = 'div1'
const username = 'yousuf'
class ConditionalRendering extends Component {
    render(){
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
}

// lifeCycle

class ConstructorAndRender extends Component{
    constructor(){
        super();
        console.log('i am from the constructor i am first then render')
    }

    render(){
        return(
            <div>
                {console.log("i am from the render i can't come before the constructor")}
                <p>open the console to see the difference between constructor and render and who is before the author</p>
            </div>
        )
    }
}

class ComponentDidMount extends Component {
    componentDidMount(){
        console.log('hi a am the componentDidMount and my job is like => (window.onload)')
    }
    render(){
        return(
            <div>
                open the console to see what componentDidMount do
            </div>
        )
    }
}

/*'
    componentDidMount
    componentDidUpdate
    componentDidCatch
    componentWillUnmount
*/

class ComponentDidUpdate extends Component {
    componentDidUpdate(prevProps, prevState){
        console.log('i am a function i will fired after the any SetState Funcand the state that changed is =>', prevState)
    }
    state = {
        text: 'open the console then click me to see what componentDidUpdate do'
    }
    chanegState = () =>{
        this.setState({
            text: 'state changed'
        })
    }
    render(){
        console.log('hi i am from render of componentDidUpdate and i render my self agine on any update')
        return (
            <div>
                <button onClick={this.chanegState}>{this.state.text}</button>
            </div>
        )
    }
}

class Ref extends Component {
    constructor(){
        super()
        this.div = React.createRef()
    }
    componentDidMount(){
        this.div.current.textContent = 'hi i am a value come from Ref'
    }
    render(){
        return(
            <div ref={this.div}></div>
        )
    }
}


class API extends Component {
    state = {
        data: []
    }
    componentDidMount(){
        axois.get('https://breakingbadapi.com/api/characters').then(res=>{
            this.setState({
                data: res.data
            })
        })
    }

    render(){
        return(
            <div>
                <h1>this data become from an api</h1>
                {this.state.data.map(value => {
                    return <p key={value.char_id}>{value.name}</p>
                })}
            </div>
        )
        
    }
}

class Fragment extends Component {
    render(){
        return (
            <div>
                <h1>Fragment</h1>
                <p>Fragment 1</p>
                <FragmentChild/>
            </div>
        )
    }
} 

class FragmentChild extends Component {
    render(){
        return(
            <React.Fragment>
                <p>Fragment 2</p>
                <p>Fragment 3</p>
            </React.Fragment>
        )
        
    }
}

class MyContext extends Component {
    state = {
        childChildText: 'this massge come from the father (provider)',
        childText: 'this massge come from the father (provider)',
        buttonText: 'change text'
    }
    changeAllText = () => {
        this.setState({
            childChildText: 'i am a steat from the father (provider)',
            childText: 'i am a nother steat from the father (provider)',
            buttonText: 'text changed'
        })
    }
    render(){
        return(
            <div>
                <allContextFacorys.FirstContextFactory.Provider value={{
                    value1: this.state.childText,
                    value2: this.state.childChildText
                }}>
                <h1>context</h1>
                <button onClick={this.changeAllText}>{this.state.buttonText}</button>
                <ContextChild/>
                </allContextFacorys.FirstContextFactory.Provider>
            </div>
        )
    }
}

class ContextChild extends Component {
    render(){
        return(
            <allContextFacorys.FirstContextFactory.Consumer>
                {({value1}) => {
                    return <React.Fragment>
                        <p>{value1}</p>
                        <ContextChildChild/>
                    </React.Fragment>
                }}
            </allContextFacorys.FirstContextFactory.Consumer>
        )
    }
}

class ContextChildChild extends Component {
    render(){
        return(
            <allContextFacorys.FirstContextFactory.Consumer>
                {({value2}) => {
                    return <React.Fragment>
                        <p>{value2}</p>
                    </React.Fragment>
                }}
            </allContextFacorys.FirstContextFactory.Consumer>
        )
    }
}

class ReactIamge extends Component {
    render(){
        return(
            <img src={reactImage} alt="react" className="App-logo"/>
        )
    }
}


export default ClassComponent