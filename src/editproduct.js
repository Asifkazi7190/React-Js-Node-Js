import React, { Component } from "react";
class editproduct extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (<div className="container mt-3">
        <div className="row">
          <div className="col-12">
            <div className="card shadow">
              <div className="card-header text-bg-dark">
                <h3>Product management</h3>
              </div>
              <div className="card-body">
                <form action>
                  <div className="row">
                    <div className="col-12">
                      <div className="col-12">
                        <h5>Edit Product</h5>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className="form-floating mb-3 mt-3">
                        <input type="text" className="form-control" id="title" placeholder="Product title" name="title" />
                        <label htmlFor="title">Edit Product title
                        </label></div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className="form-floating mb-3 mt-3">
                        <select className="form-select" id="categoryid" aria-label="Select categoryid" name="categoryid">
                          <option selected>Change categoryid</option>
                          <option value={1}>Camera</option>
                          <option value={2}>Mouse</option>
                          <option value={3}>Mobile</option>
                          <option value={4}>Laptop</option>
                        </select>
                        <label htmlFor="categoryid">Change Category</label>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                      <label htmlFor="formFile" className="form-label">Default file input</label>
                      <input className="form-control" type="file" id="formFile" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className="form-floating mb-3 mt-3">
                        <input type="number" className="form-control" id="price" placeholder="Price" name="price" />
                        <label htmlFor="price">Edit price</label>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className="form-floating mb-3 mt-3">
                        <input type="number" className="form-control" id="stock" placeholder="Stock" name="stock" />
                        <label htmlFor="stock">Edit Stock</label>
                      </div>   
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className="form-floating mb-3 mt-3">
                        <input type="number" className="form-control" id="Weight" placeholder="weight" name="weight" />
                        <label htmlFor="weight">Edit Weight</label>
                      </div>   
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                        <p>is Available?</p>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="status" id="yes" />
                          <label className="form-check-label" htmlFor="yes">Yes</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="status" id="no" />
                          <label className="form-check-label" htmlFor="no">No</label>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="form-floating">
                          <textarea className="form-control" name="detail" id="detail" style={{"height":"100px"}} defaultValue={""} />
                          <label htmlFor="detail">Edit Detail</label>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                        <button type="submit" className="btn btn-dark w-100 mt-5">Save changes</button>
                      </div>
                    </div>
                  </div></form>
              </div>
            </div>
          </div>
        </div></div>

            );
    }
}
export default editproduct;