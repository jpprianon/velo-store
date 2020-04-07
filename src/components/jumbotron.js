import React from "react";

function Jumbotron({title}) {
  return (
    <div class="jumbotron">
    <div class="container">
  <h1 class="display-4">{title}</h1>
      <p class="lead">Installez un moteur central sur votre vélo. Kit Bafang, batterie lithium. </p>
    </div>
  </div>
  );
}

export default Jumbotron;
