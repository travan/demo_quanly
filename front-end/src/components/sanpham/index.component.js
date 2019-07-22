import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TableRow from './tableRow';

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = { products: [] };
  }
  componentDidMount() {
    axios.get('http://localhost:8100/api/product')
      .then(response => {
        this.setState({ products: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  tabRow() {
    return this.state.products.map(function (object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3 align="center">Danh sách sản phẩm</h3>
        <div className="nav-item" style={{ float: 'right' }}>
          <Link to={'/sanpham/create'} className="nav-link"><button className="btn btn-primary">Thêm</button></Link>
        </div>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>STT</th>
              <th>Mã</th>
              <th>Tên</th>
              <th>Link hình ảnh</th>
              <th>Ghi chú</th>
              <th>Trạng thái</th>
              <th>Tổng số</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.tabRow()}
          </tbody>
        </table>
      </div>
    );
  }
}