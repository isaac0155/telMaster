import React, { Component } from "react";

const estilo =
{
  color: "#fff",
  background: "#D53F3D",
  width: "146pt",
  padding: "10px 50px",
  textTransform: "uppercase",
  border: "none"
}
class Boton extends Component
{
  constructor(props){
    super(props);
    this.state = {
      texto: props.texto
    }
  }
  render()
  {
    return (
      <a target = "blank" href = {this.props.enlace} style = {estilo} data-testid="boton">{this.props.children}</a>
    )
  }
}
export default Boton;
