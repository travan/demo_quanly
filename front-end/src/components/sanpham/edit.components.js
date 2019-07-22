import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      item: {}
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8100/api/product/' + this.props.match.params.id)
      .then(response => {
        console.log(response.data[0]);
        this.setState({
          item: {
            sp_ma: response.data[0].sp_ma,
            sp_ten: response.data[0].sp_ten,
            sp_hinhanh: response.data[0].sp_hinhanh,
            sp_ghichu: response.data[0].sp_ghichu,
            sp_trangthai: response.data[0].sp_trangthai,
            sp_tong: response.data[0].sp_tong
          }
        });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  onChange = (name) => {
    return e => {
      this.setState({
        item: {
          ...this.state.item,
          [name]: e.target.value
        }
      })
    }
  }

  onSubmit(e) {
    e.preventDefault();
    axios.put(`http://localhost:8100/api/product/${this.props.match.params.id}`, this.state.item)
      .then(res => console.log(res.data));
    this.props.history.push('/sanpham');
  }

  render() {
    console.log(this.state.item)
    const { sp_ma, sp_ten, sp_hinhanh, sp_ghichu, sp_trangthai, sp_tong } = this.state.item
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Thêm sản phẩm nào!</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Mã sản phẩm:  </label>
            <input type="text"
              className="form-control"
              value={sp_ma}
              onChange={this.onChange('sp_ma')}
            />
          </div>
          <div className="form-group">
            <label>Tên sản phẩm: </label>
            <input type="text"
              className="form-control"
              value={sp_ten}
              onChange={this.onChange('sp_ten')} />
          </div>
          <div className="form-group">
            <label>Link hình ảnh: </label>
            <input type="text"
              className="form-control"
              value={sp_hinhanh}
              onChange={this.onChange('sp_hinhanh')} />
          </div>
          <div className="form-group">
            <label>Ghi chú sản phẩm: </label>
            <input type="text"
              className="form-control"
              value={sp_ghichu}
              onChange={this.onChange('sp_ghichu')} />
          </div>
          <div className="form-group">
            <label>Trạng thái: </label>
            <input type="text"
              className="form-control"
              value={sp_trangthai}
              onChange={this.onChange('sp_trangthai')} />
          </div>
          <div className="form-group">
            <label>Tổng: </label>
            <input type="text"
              className="form-control"
              value={sp_tong}
              onChange={this.onChange('sp_tong')} />
          </div>
          <div className="form-group">
            <input type="submit"
              value="Sửa sản phẩm"
              className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}
