import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  delete() {
    axios.delete('http://localhost:8100/api/product/' + this.props.obj.sp_id)
      .then(console.log('Deleted'))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <tr>
        <td>
          {this.props.obj.sp_id}
        </td>
        <td>
          {this.props.obj.sp_ma}
        </td>
        <td>
          {this.props.obj.sp_ten}
        </td>
        <td>
          {this.props.obj.sp_hinhanh}
        </td>
        <td>
          {this.props.obj.sp_ghichu}
        </td>
        <td>
          {this.props.obj.sp_trangthai}
        </td>
        <td>
          {this.props.obj.sp_tong}
        </td>
        <td>
          <Link to={"/edit/" + this.props.obj.sp_id}><button className="btn btn-primary">Edit</button></Link>
        </td>
        <td>
          <button onClick={this.delete} className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}

export default TableRow;