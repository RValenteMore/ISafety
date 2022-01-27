import React from "react";
import * as XLSX from "xlsx";
import axios from 'axios';
//import {getLoja, createLoja} from '../services/LojaService'

class ExcelToJson extends React.Component {
  constructor(){
    super()
    this.state ={
      
      name: '',
      local: '',
      dadosenviados: [],
      file: this.dados

    }
   
    this.changeName = this.changeName.bind(this);
    this.changeLocal = this.changeLocal.bind(this);
    this.handleSubmitLoja = this.handleSubmitLoja.bind(this);
    this.handleCallback  = this.handleCallback.bind(this);
    this.readFile = this.readFile.bind(this);
    this.changeDados = this.changeDados.bind(this);
    console.log("Dados: ", this.dados);
  }
  handleCallback = (childData) =>{
    this.setState({dados: childData})
}
filePathset(e) {
  e.stopPropagation();
  e.preventDefault();
  var file = e.target.files[0];
  console.log(file);
  this.setState({ file });
}

readFile = () => {
  var f = this.state.file;
  var dados = this.state.dadosenviados;
  //var name = f.name;
  const reader = new FileReader();
  reader.onload = (evt) => {
    // evt = on_file_select event
    /* Parse data */
    const bstr = evt.target.result;
    const wb = XLSX.read(bstr, { type: "binary" });
    /* Get first worksheet */
    //const wsname = wb.SheetNames[0];
    //const ws = wb.Sheets[wsname];
    wb.SheetNames.forEach(function(sheetName) {
      // Here is your object
      var XL_row_object = XLSX.utils.sheet_to_row_object_array(wb.Sheets[sheetName]);
      var json_object = JSON.stringify(XL_row_object);
      //console.log(JSON.parse(json_object));
      //console.log(JSON.parse(json_object));
      //jQuery( '#xlx_json' ).val( json_object );
      const data=JSON.parse(json_object);
      
      //createLoja(data);
      //this.data = data;
      //this.props.parentCallback(data);
      
      //this.setState({dados: data});
      dados = data;
      //props.dados(data);
    })
    this.dadosenviados= dados;
    this.changeDados(dados);
    //this.setState({dadosenviados: dados});
    //console.log("Dados do excel para JSON: ", this.dadosenviados);
    //return(this.state.dadosenviados);
  };     
  reader.readAsArrayBuffer(f);
   
  //console.log("Dados read Array JSON: ", this.dadosenviados);
  
    
}

changeDados(data){
  this.setState({
    dadosenviados: data
  });
  console.log("changeDados - - -  >", this.dadosenviados);
}

 
  changeName(event){
    this.setState({
      name:event.target.value
    })
  }
  changeLocal(event){
    this.setState({
      local:event.target.value
    })
  }

 
  handleSubmitLoja(event){
    event.preventDefault()

    const registeredLoja = {
      name: this.state.name,
      local: this.state.local,
      dataAlgoritmo : this.state.dadosenviados
    }
    axios.post('http://localhost:4000/app/sumeteloja', registeredLoja)
    .then(response => console.log(response.data))
//console.log(this.props.dadosenviados);
    this.setState({
      name: '',
      local: '',
      dadosenviados:''
    })
  }

  render(){
    return(
      
      <div>
        
        <div className="container">
          <div className="form-div">
            
            <p><h3>Dados LOJA</h3></p>
            <form onSubmit = {this.handleSubmitLoja}>
              <input type="text" placeholder='Nome da loja' onChange={this.changeName} value={this.state.name} className="form-control form-group"/>
              <input type="text" placeholder="Local" onChange={this.changeLocal} value={this.state.local} className="form-control form-group"/>
             
              <div className="col-md-8 mrgnbtm">
                <h2>eXcel TO Json Parser</h2>
                    
                    <input type="file" id="file" className="btn btn-primary" ref="fileUploader" onChange={this.filePathset.bind(this)} />
                    <button onClick={() => this.readFile()} className="btn btn-danger ml-5">Create Json</button>
                </div>
              <input type="submit" className="btn btn-danger btn-block" value="Submit"/>
            </form>
          </div>
        </div>
      </div>
    );
  }

}

export default ExcelToJson;