import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {

  state = {
    item: {}
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

  onSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8100/api/detail-product', this.state.item)
      .then(res => console.log(res.data));
    this.props.history.push('/sanpham');
  }

  render() {
    console.log(this.state.item)
    const { ctsp_id, sp_id, ctsp_xuatxu, ctsp_model, ctsp_thongso, ctsp_kichthuoc,
      ctsp_congsuat, ctsp_khoiluong, ctsp_dacdiem, ctsp_hangsx } = this.state.item
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Thêm chi tiết sản phẩm nào!</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Mã chi tiết sản phẩm: </label>
            <input type="text"
              className="form-control"
              value={ctsp_id}
              onChange={this.onChange('ctsp_id')} />
          </div>
          <div className="form-group">
            <label>Số thứ tự sản phẩm: </label>
            <input type="text"
              className="form-control"
              value={sp_id}
              onChange={this.onChange('sp_id')} />
          </div>
          <div className="form-group">
            <label>Xuất xứ: </label>
            <input type="text"
              className="form-control"
              value={ctsp_xuatxu}
              onChange={this.onChange('ctsp_xuatxu')} />
          </div>
          <div className="form-group">
            <label>Model: </label>
            <input type="text"
              className="form-control"
              value={ctsp_model}
              onChange={this.onChange('ctsp_model')} />
          </div>
          <div className="form-group">
            <label>Thông số: </label>
            <input type="text"
              className="form-control"
              value={ctsp_thongso}
              onChange={this.onChange('ctsp_thongso')} />
          </div>
          <div className="form-group">
            <label>Kích thước: </label>
            <input type="text"
              className="form-control"
              value={ctsp_kichthuoc}
              onChange={this.onChange('ctsp_kichthuoc')} />
          </div>
          <div className="form-group">
            <label>Công suất: </label>
            <input type="text"
              className="form-control"
              value={ctsp_congsuat}
              onChange={this.onChange('ctsp_congsuat')} />
          </div>
          <div className="form-group">
            <label>Khối lượng: </label>
            <input type="text"
              className="form-control"
              value={ctsp_khoiluong}
              onChange={this.onChange('ctsp_khoiluong')} />
          </div>
          <div className="form-group">
            <label>Địa điểm: </label>
            <input type="text"
              className="form-control"
              value={ctsp_dacdiem}
              onChange={this.onChange('ctsp_dacdiem')} />
          </div>
          <div className="form-group">
            <label>Hãng sản xuất: </label>
            <input type="text"
              className="form-control"
              value={ctsp_hangsx}
              onChange={this.onChange('ctsp_hangsx')} />
          </div>
          <div className="form-group">
            <input type="submit"
              value="Sửa sản phẩm"
              className="btn btn-primary" />
          </div>
        </form>
      </div >
    )
  }
}
