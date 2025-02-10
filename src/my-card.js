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
    this.chipTitle = "NFL Player";
    this.chipLink = "#";
    this.description = "NFL Player";
    this.viewStatsLink = "#";
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .card {
        width: 400px;
        border: 1px solid;
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
        display: block;
      }

      .card-info {
        padding: 16px;
        text-align: center;
      }

      .player-name {
        font-size: 24px;
        color: blue;
        text-shadow: 0 0 10px red;
        margin-bottom: 10px;
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
        color: blue;
        font-weight: bold;
        text-align: center;
        transition: background-color .3s ease-in-out, color 0.3 ease; /*This transtition makes the button and text change colors over 0.3 sec*/
      }

      .hax-button:hover {
        background-color: #66ccff;
        color: white;
        cursor: pointer;
      }
    `;
  }

  render() {
    console.log('viewStatsLink:', this.viewStatsLink); // Debugging
    return html`
      <div class="card" style="--card-bg-color: ${this.backgroundColor}">
        <img src="${this.img}" alt="${this.playerName}">
        <div class="card-info">
          <h2 class="player-name">${this.playerName}</h2>
          <p>${this.description}</p>
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
      chipTitle: { type: String },
      chipLink: { type: String },
      description: { type: String },
      viewStatsLink: { type: String, reflect: true },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
