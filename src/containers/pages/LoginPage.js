import React, { Component } from 'react';
import { connect } from 'react-redux';

class SamplePage extends Component {

  state = {
  }

  render() {
    return (
      <div className="container">
        Login to hello world!
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SamplePage);