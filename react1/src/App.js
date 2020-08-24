// Import library
import React, {Component} from 'react';
import './App.css';
import Alert from './Components/Alert'; // import component Alert
import Media from './Components/Media'; // import component Media 

// class yang akan dirender ke file html
class App extends Component {

  // Fungsi yang pertama kali dipanggil saat process instance pada class
  constructor(){ 
    super();
    this.state = {
      type: "danger",
      header: "Fatal Error",
      content: "Content dari alert (State Props)"
    }
  }

  // Function for change type Alert
  changeTypeAlert = (event) => {
    this.setState({type: event.target.value}); // perintah untuk mengubah nilai state
  }
  // Function for change header Alert
  changeHeaderAlert = (event) => {
    this.setState({header: event.target.value}); // perintah untuk mengubah nilai state
  }
  // Function for change content Alert
  changeContentAlert = (event) => {
    this.setState({content: event.target.value}); // perintah untuk mengubah nilai state
  }

  // function render, semua element yang ada didalam akan dirender/ditampilkan
  render(){
    return(
      // semua element html wajib didalam <div>
      <div>
        {/* first */}
        <div className="App">
          <h3>Ini project pertama ReactJS</h3>
          <p>Belajar ReactJS itu mudah</p>
        </div>
        
        {/* second */}
        <div className="App">
          <h3 className="judul">Ini project pertama ReactJS</h3>
          <p className="subJudul">Belajar ReactJS itu mudah</p>
        </div>

        {/* third // bootstrap */}
        <div className="App container">
          <div className="alert alert-info">
            <h3 className="text-danger">Ini project pertama ReactJS</h3>
            <p>Belajar ReactJS itu mudah</p>
            <button className="mr-1 btn btn-success">Setuju</button>
            <button className="btn btn-info">Oiya Dong</button>
          </div>
        </div>

        {/* Fourth // Alert */}
        <div className="container">
          {/* Panggil component Alert untuk dirender */}
          <Alert type="danger" header="Fatal Error">
            danger
          </Alert>

          <Alert type="success" header="Berhasil">
            success
          </Alert>

          <Alert type="warning" header="Warning">
            warning
          </Alert>
        </div>

        {/* Fifth // Media */}
        <div className="container">
          <Media image="BUY.png" title="Open Buy" width="250px">
            Open buy
          </Media>
          <Media image="SELL.png" title="Open Sell" width="350px">
            Open Sell
          </Media>
          <Media image="strategy.png" title="Strategy" width="450px">
            Strategy
          </Media>
        </div>

        {/* Sixth // Alert with State and Props */}
        <div className="container">
          {/* Panggil component Alert untuk dirender */}
          <Alert type={this.state.type} header={this.state.header}>
            {/* Pemanggilan state */}
            "{this.state.content}" 
          </Alert>
          
          {/* Form Control for change content and type alert */}
          <hr/>
          <h4 className="text-center">Alert Control</h4>
          
          <b className="text-left">Tipe Alert</b>
          <select className="form-control" name="type" value={this.state.type} onChange={this.changeTypeAlert}>
            <option value="success">Success</option>
            <option value="warning">Warning</option>
            <option value="danger">Danger</option>
            <option value="info">Info</option>
          </select>

          <b className="text-left">Header Alert</b>
          <input type="text" name="header" className="form-control" value={this.state.header} onChange={this.changeHeaderAlert} />

          <b className="text-left">Content Alert</b>
          <input type="text" name="content" className="form-control" value={this.state.content} onChange={this.changeContentAlert} />
        </div>
      </div>
    );
  }
}

export default App; // memanggil class App untuk diload dan ditampilkan