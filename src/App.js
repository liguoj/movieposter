import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = { files: [] ,movie:{
      img_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506407203182&di=614e75ffc93a1c2260c5fe845fa0f882&imgtype=0&src=http%3A%2F%2Fimage12.m1905.cn%2Fmapps%2Fuploadfile%2Fedu%2F2014%2F1225%2Fthumb_0_400_600_2014122511060228826.jpg",
      movie_words:'"I guess it comes down to a simple choice:get busy living or get busy dying."',
      movie_name:"肖申克的救赎"
    }}
  }

  onImageDrop(files) {
    debugger
    this.setState({
       files
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img className="App-img" src={this.state.movie.img_url} alt="logo" />
        </div>
        <div className="App-intro">{this.state.movie.movie_words}</div>
        <div className="App-intro">{this.state.movie.movie_name}</div>
      </div>
    );
  }
}

export default App;