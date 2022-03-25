import React from "react";
import Header from "./Header";

interface HeaderInterface {
    title: string;
  }
class MainPage extends React.Component<{ header: HeaderInterface }, {}> {
    
  render() {
    return (
      <div id="page">
        <Header header={this.props.header} />
        <div className="container-fluid">
          <div className="row flex-nowrap">
            <div className="col py-3">{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
