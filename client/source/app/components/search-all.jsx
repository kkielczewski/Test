import React from 'react';
import { Form, Input } from 'semantic-ui-react';

class SearchAll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.onSearch = this.onSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onSearch() {
    this.props.onSearch(this.state.value);
  }

  handleChange(e, { value }) {
    this.setState({ value });
  }

  render() {
    return (
      <Form onSubmit={this.onSearch} >
        <Input icon='search' placeholder='Szukaj...' onChange={this.handleChange} />
      </Form>
    );
  }
}

export default SearchAll;
