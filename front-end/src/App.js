import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import CreatePro from './components/sanpham/create.components';
import EditPro from './components/sanpham/edit.components';
import IndexPro from './components/sanpham/index.component';

import CreateDe from './components/chitietsanpham/createDetail.components';
import EditDe from './components/chitietsanpham/editDetail.components';
import IndexDe from './components/chitietsanpham/indexDetail.components';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">SHOP</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/sanpham'} className="nav-link">Sản phẩm</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/chi-tiet-san-pham'} className="nav-link">Chi tiết sản phẩm</Link>
                </li>
              </ul>
            </div>
          </nav> <br />
          <Switch>
            <Route path='/sanpham/create' component={CreatePro} />
            <Route path='/sanpham/edit/:id' component={EditPro} />
            <Route path='/sanpham' component={IndexPro} />
            <Route path='/chi-tiet-san-pham/create' component={CreateDe} />
            <Route path='/chi-tiet-san-pham/edit/:id' component={EditDe} />
            <Route path='/chi-tiet-san-pham' component={IndexDe} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;