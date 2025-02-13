import { LitElement, html, css } from 'lit';
import './polaris-chip.js'; /** Have to import polaris-chip here to use it in the render method */

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.playerName = "Player Name";
    this.img = "https://d.newsweek.com/en/full/2482587/giants-wr-malik-nabers.jpg?w=1600&h=1600&q=88&f=9965ce8aa35afe5e59660783ff024754";
    this.backgroundColor = "white";
    this.description = "NFL Player";
    this.viewStatsLink = "#";
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: block;
        --my-css-background: red; /* If you want to reuse in multiple classes */
      }

      :host([fancy]) .card {
        --card-bg-color: lightblue;
      color: white;
      border-radius: 10px;
      border: solid 2px black;
      }

      :host([fancy]) .hax-button {
        background-color: #FF8488;
      }

      .card {
        width: 400px;
        border: 2px solid black;
        border-radius: 10px;
        background-color: var(--card-bg-color, white); /*This sets the background color to the value of the --card-bg-color variable to white if variable is not defined*/
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        transition: .6s all ease-in-out; /*Makes any changes to elements style over .6 sec ease in and out*/
      }

      .card img {
        width: 100%;
        height: auto;
        border-radius: 10px;
        display: block;
        max-width: 100%;
        max-height: 100%;
      }

      .card-info {
        padding: 16px;
        text-align: center;
      }

      .player-name {
        font-size: 24px;
        color: blue;
/*         text-shadow: 0 0 10px red; This was pretty obnoxious but i thought it looked cool
 */        margin-bottom: 10px;
      }

      .view-stats {
        display: block;
        margin-bottom: 20px;
        color: blue;
        text-decoration: none;
      }


      .hax-button {
        display: block;
        margin: 12px auto;
        padding: 10px 20px;
        border: none;
        border-radius: 6px;
        background-color: #add8e6;
        color: red;
        font-weight: bold;
        text-align: center;
        transition: background-color .3s ease-in-out, color 0.3 ease; /*This transtition makes the button and text change colors over 0.3 sec*/
      }

      .hax-button:hover {
        background-color: #66ccff;
        color: white;
        cursor: pointer;
      }

    

      details summary {
  text-align: center;
  font-size: 20px;
  padding: 8px 0;
  color: red;
  cursor: pointer; 
  transition: all 0.3s ease-in-out;
}

details summary:hover { 
  font-weight: bold;
  color: red;
  /* text-shadow: 0 0 10px red; This was pretty obnoxious but i thought it looked cool*/
  border-radius: 6px; /* Makes background effect smoother */
  padding: 10px 0; /* Adjust for better hover feel */
}
      
      details div {
        border: 2px solid black;
        text-align: left;
        padding: 8px;
        height: 70px;
        overflow: auto;
      }
    `;
  }

  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`
      <div class="card">
        <img src="${this.img}" alt="${this.playerName}">
        <div class="card-info">
          <h2 class="player-name">${this.playerName}</h2>
          <details @toggle="${this.openChanged}">
          <summary>Description</summary>  
          <slot></slot></details>
          <a href="${this.viewStatsLink}" target="_blank" class="view-stats">View Stats</a>
          <a href="https://hax.psu.edu" target="_blank" class="hax-button">Details</a>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      playerName: { type: String },
      img: { type: String},
      backgroundColor: { type: String},
      description: { type: String },
      viewStatsLink: { type: String, reflect: true },
      fancy: { type: Boolean, reflect: true },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
