import React from "react";

/**
 * Componente de classe
 */
class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello world",
    };
  }

  componentDidMount() {
    console.log("É EXECUTADO QUANDO O USUÁRIO ACESSA PELA PRIMEIRA VEZ");
  }

  render() {
    return <h1>{this.state.message}</h1>;
  }
}

export default Test;
