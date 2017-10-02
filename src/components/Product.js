import React, { Component } from 'react'
import './Product.css'

class Product extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showDescription: false
    }

    this._showDescription = this._showDescription.bind(this)
  }

  _showDescription() {
    this.setState({showDescription: true})
  }

  render() {
    const { title, description } = this.props.product
    return (
      <div className="Product">
        <div className={this.state.showDescription ? 'b' : ''} onClick={this._showDescription}>
          {title}
        </div>
        {this.state.showDescription && <div>{description}</div>}
      </div>
    );
  }
}

export default Product
