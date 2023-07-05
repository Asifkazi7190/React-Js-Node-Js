import React, { Component } from 'react';
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {

    return (

      <div className="container mt-3">
        <div className="row">
          <div className="col-12">
            <div className="card shadow">
              <div className="card-header text-bg-dark">
                <div className="row">
                  <div className="col">
                    <h3>Products</h3>
                  </div>
                  <div className="col text-end">
                    <a href="insertproduct" className="btn btn-light">Add Product</a>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <table className="table table-bordered table-responsive">
                  <thead>
                    <tr><th>Id</th>
                      <th>Category</th>
                      <th>Title</th>
                      <th>Photo</th>
                      <th>Price</th>
                      <th>Stock</th>
                      <th>Weight</th>
                      <th>Details</th>
                    </tr></thead>
                  <tbody>
                    <tr><td width="10%">1
                      <br />
                      <span className="badge bg-primary">Live</span>
                    </td>
                      <td>Laptop</td>
                      <td width="10%">Acer i5 laptop</td>
                      <td width="10%"><img src="https://picsum.photos/100" alt="img-fluid"  ></img></td>
                      <td width="10%">50000</td>
                      <td width="10%">25</td>
                      <td width="10%">2KG</td>
                      <td width="30%">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
                        deserunt earum aliquam mollitia ad.
                      </td>
                    </tr></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Product;

