import React,{Component} from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart'
import CountryPicker from './components/CountryPicker/CountryPicker';
import {fetchData} from './api/getAPI';

class App extends Component {
  state={
    data:{},
    country:''
  }
  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data:fetchedData})
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data : fetchedData, country : country })
  }
  render(){ 
    const { data, country }=this.state
    return (
      <div className="container">
        <h3 className="siteName">Addy Corona Tracker</h3>
        <Cards data={data}/>
        <CountryPicker className="country" handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country} />
      </div>
    )
  }
}

export default App;
