import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  delete() {
    axios.delete('http://localhost:8100/api/detail-product/' + this.props.obj.ctsp_id)
      .then(console.log('Deleted'))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <tr>
        <td>
          {this.props.obj.ctsp_id}
        </td>
        <td>
          {this.props.obj.sp_id}
        </td>
        <td>
          {this.props.obj.ctsp_xuatxu}
        </td>
        <td>
          {this.props.obj.ctsp_model}
        </td>
        <td>
          {this.props.obj.ctsp_thongso}
        </td>
        <td>
          {this.props.obj.ctsp_kichthuoc}
        </td>
        <td>
          {this.props.obj.ctsp_congsuat}
        </td>
        <td>
          {this.props.obj.ctsp_khoiluong}
        </td>
        <td>
          {this.props.obj.ctsp_dacdiem}
        </td>
        <td>
          {this.props.obj.ctsp_hangsx}
        </td>
        <td>
          <Link to={"/edit/" + this.props.obj.ctsp_id}><button className="btn btn-primary">Edit</button></Link>
        </td>
        <td>
          <button onClick={this.delete} className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}

export default TableRow;