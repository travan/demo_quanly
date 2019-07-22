import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TableRow from './tableRowDetail.components';

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = { detailProducts: [] };
  }
  componentDidMount() {
    axios.get('http://localhost:8100/api/detail-product')
      .then(response => {
        console.log(response.data)
        this.setState({ detailProducts: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  detailTabRow() {
    return this.state.detailProducts.map(function (object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3 align="center">Danh sách chi tiết sản phẩm</h3>
        <div className="nav-item" style={{ float: 'right' }}>
          <Link to={'/chi-tiet-san-pham/create'} className="nav-link"><button className="btn btn-primary">Thêm</button></Link>
        </div>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>STT</th>
              <th>Mã sản phẩm</th>
              <th>Xuất xứ</th>
              <th>Model</th>
              <th>Thông số</th>
              <th>Kích thước</th>
              <th>Công suất</th>
              <th>Khối lượng</th>
              <th>Đặc điểm</th>
              <th>Hãng sản xuất</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.detailTabRow()}
          </tbody>
        </table>
      </div>
    );
  }
}