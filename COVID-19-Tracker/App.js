import React from "react";
import Cards from "./components/Card";
import Chart from "./components/Chart";
import Country from "./components/Country";
import { fetchData } from './containers/api';

class App extends React.Component {

  state = {
       data: {},
       country: '',
  }

  async componentDidMount(){
      const fetchdata = await fetchData();
      this.setState({data : fetchdata})
  }

  handleCountryChange = async (country) =>{
      const fetchdata = await fetchData(country)
       
      this.setState({data: fetchdata, country:country})
  }

  render() {
    return (
      <div className="container">
        <h1 className='text-danger text-center mb-3'>COVID-19 Tracker</h1>
        <Cards data={this.state.data} />
        <Country handleCountryChange={this.handleCountryChange} />
        <Chart data={this.state.data} country={this.state.country} />
      </div>
    )
  }
}
export default App;

