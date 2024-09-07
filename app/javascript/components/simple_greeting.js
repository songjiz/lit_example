import { LitElement, css, html } from 'lit'

export class SimpleGreeting extends LitElement {
  static properties = {
    time: {},
  }

  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      color: var(--text-color, blue);
    }
  `

  constructor() {
    super()
    // Declare reactive properties
    this.time = new Date()
    this._timer = setInterval(() => { this.time = new Date() }, 1000)
  }

  connectedCallback() {
    super.connectedCallback()

    console.debug("connected")
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    clearInterval(this._timer)
  }

  willUpdate(changedProperties) {
    console.debug("willUpdate", changedProperties)
  }

  updated(changedProperties) {
    console.debug("updated:", changedProperties)
  }

  // Render the UI as a function of component state
  render() {
    return html`<p>Time: ${this.time}!</p>`
  }
}

customElements.define('simple-greeting', SimpleGreeting)
