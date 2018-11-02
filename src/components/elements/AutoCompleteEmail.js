import React, { Component } from 'react';
import { Input, AutoComplete, Icon } from 'antd';

class AutoCompleteEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    }
  }
  onChange = (email) => {
    let dataSource = !email || email.indexOf('@') >= 0 ? [] : [
      `${email}@gmail.com`,
      `${email}@mail.ru`,
      `${email}@yandex.ru`,
      `${email}@codebusters.team`,
    ];
    this.setState({ dataSource }, () => {
      this.props.onChange(email);  
    })
  }
  onSubmit = (e) => {
    e.preventDefault();
    if (this.props.email.indexOf('@') >= 0)
      this.props.onSubmit();
  }

  render() {
    return (
      <AutoComplete
        ref={(ref) => this.ref = ref}
        backfill={true}
        size={this.props.size}
        style={{width: '100%'}}
        value={this.props.email}
        dataSource={this.state.dataSource}
        onChange={this.onChange}
        onSelect={this.props.onSelect}
        defaultActiveFirstOption={false}
        >
        <Input
          size={this.props.size}
          onPressEnter={this.onSubmit}
          prefix={<Icon type="mail" style={{ color: '#11D577' }}/>}
          placeholder="Электронная почта" />
      </AutoComplete>
      )
  }
}

export default AutoCompleteEmail;
