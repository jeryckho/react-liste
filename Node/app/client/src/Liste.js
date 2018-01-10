import React, { Component } from "react";

class Liste extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listes: []
    };
  }

  componentDidMount() {
    fetch("/api/liste")
      .then(results => results.json())
      .then(data => {
        let lst = data.map(elt => {
          return (
            <div key={elt.id}>
              Liste : {elt.slug} / Titre : {elt.titre}
            </div>
          );
        });
        this.setState({ listes: lst });
        console.log("state", this.state.listes);
      });
  }

  render() {
    return <div>{this.state.listes}</div>;
  }
}

export default Liste;
