import React from "react";

interface HeaderInterface {
    title: string;
  }
interface PropsInterface {
  header: HeaderInterface;
}
class Header extends React.Component<PropsInterface, {}> {

  render() {
    const { header } = this.props;
    return (
      <header className="py-3  border-bottom shadow bg-info container-fluid">
        <div
          className="container-fluid "
          style={{ gridTemplateColumns: "1fr 2fr" }}
        >
          <h2 className=" text-center">{header.title}</h2>
        </div>
      </header>
    );
  }
}

export default Header;
