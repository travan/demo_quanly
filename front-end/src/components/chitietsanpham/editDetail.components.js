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
    axios.get('http://localhost:8100/api/detail-product/' + this.props.match.params.id)
      .then(response => {
        console.log(response.data[0]);
        this.setState({
          item: {
            sp_id: response.data[0].sp_id,
            ctsp_xuatxu: response.data[0].ctsp_xuatxu,
            ctsp_model: response.data[0].ctsp_model,
            ctsp_thongso: response.data[0].ctsp_thongso,
            ctsp_kichthuoc: response.data[0].ctsp_kichthuoc,
            ctsp_congsuat: response.data[0].ctsp_congsuat,
            ctsp_khoiluong: response.data[0].ctsp_khoiluong,
            ctsp_dacdiem: response.data[0].ctsp_dacdiem,
            ctsp_hangsx: response.data[0].sp_tong,
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
    axios.put(`http://localhost:8100/api/detail-product/${this.props.match.params.id}`, this.state.item)
      .then(res => console.log(res.data));
    this.props.history.push('/sanpham');
  }

  render() {
    console.log(this.state.item)
    const { sp_id, ctsp_xuatxu, ctsp_model, ctsp_thongso, ctsp_kichthuoc,
      ctsp_congsuat, ctsp_khoiluong, ctsp_dacdiem, ctsp_hangsx } = this.state.item
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Sửa chi tiết sản phẩm nào!</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Tên sản phẩm: </label>
            <input type="text"
              className="form-control"
              value={sp_id}
              onChange={this.onChange('sp_id')} />
          </div>
          <div className="form-group">
            <label>Link hình ảnh: </label>
            <input type="text"
              className="form-control"
              value={ctsp_xuatxu}
              onChange={this.onChange('ctsp_xuatxu')} />
          </div>
          <div className="form-group">
            <label>Ghi chú sản phẩm: </label>
            <input type="text"
              className="form-control"
              value={ctsp_model}
              onChange={this.onChange('ctsp_model')} />
          </div>
          <div className="form-group">
            <label>Trạng thái: </label>
            <input type="text"
              className="form-control"
              value={ctsp_thongso}
              onChange={this.onChange('ctsp_thongso')} />
          </div>
          <div className="form-group">
            <label>Tổng: </label>
            <input type="text"
              className="form-control"
              value={ctsp_kichthuoc}
              onChange={this.onChange('ctsp_kichthuoc')} />
          </div>
          <div className="form-group">
            <label>Tổng: </label>
            <input type="text"
              className="form-control"
              value={ctsp_congsuat}
              onChange={this.onChange('ctsp_congsuat')} />
          </div>
          <div className="form-group">
            <label>Tổng: </label>
            <input type="text"
              className="form-control"
              value={ctsp_khoiluong}
              onChange={this.onChange('ctsp_khoiluong')} />
          </div>
          <div className="form-group">
            <label>Tổng: </label>
            <input type="text"
              className="form-control"
              value={ctsp_dacdiem}
              onChange={this.onChange('ctsp_dacdiem')} />
          </div>
          <div className="form-group">
            <label>Tổng: </label>
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
