import React,{Component} from 'react';
import InputField from './components/inputfield'

class App extends Component{
    state = {
        kVal :0,
        cVal :0,
        fVal :0
    }

    handelKelvinChange = (e)=>{
        const value = parseFloat(e.target.value);
        const kVal = isNaN(value) ? 0 : value
        const cVal = kVal - 273.15
        const fVal = (kVal - 273.15) *9/5 + 32
        this.setState({kVal, cVal, fVal})
    }

    handelCelsiusChange = (e)=>{
        const value = parseFloat(e.target.value)
        const cVal = isNaN(value) ? 0 : value
        const kVal = cVal + 273.15
        const fVal = (cVal * 9) / 5 + 32
        this.setState({cVal, kVal, fVal})   
    }

    handelFahrenheitChange = (e)=>{
        const value = parseFloat(e.target.value)
        const fVal = isNaN(value) ? 0 : value
        const cVal = ((fVal - 32) * 5 ) / 9
        const kVal = fVal + 273.15
        this.setState({fVal, cVal, kVal})
    }

    render(){
        const {kVal, cVal, fVal} = this.state

        return(
            <div>
                <h1 className="heading">Temperature Converter</h1>
                <div className="container">
                    <InputField 
                    onChange={this.handelKelvinChange} 
                    value={kVal} 
                    displayText="kelvin (k)" 
                    name="kelvin" 
                    id="kelvin" /> 
                    <InputField 
                    onChange={this.handelCelsiusChange} 
                    value={cVal} 
                    displayText="celsius (c)" 
                    name="celsius" 
                    id="celsius" />
                    <InputField 
                    onChange={this.handelFahrenheitChange} 
                    value={fVal} 
                    displayText="fahrenheit (k)" 
                    name="fahrenheit" 
                    id="fahrenheit" />
                </div>
            </div>
        )
    }
}

export default App;