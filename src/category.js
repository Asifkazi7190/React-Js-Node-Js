import React, { Component } from 'react';
class Category extends Component {
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
              <div className="row">
                <div className="col">
                  <div className="card-header text-bg-dark">
                    <div className="row">
                      <div className="col">
                        <h3>Category Management</h3>
                      </div>
                      <div className="col text-end">
                        <a href='insertcategory' className="btn btn-light">Add new category</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <table className="table table-bordered table-responsive">
                  <thead>
                    <tr><th width="10%">Id</th>
                      <th>Name</th>
                      <th>Photo</th>
                      <th>Is Live</th>
                      <th>Operation</th>
                    </tr></thead>
                  <tbody>
                    <tr><td width="10%">1</td>
                      <td>Laptop</td>
                      <td><img src="https://picsum.photos/100" alt="img-fluid" /></td>
                      <td>Yes</td>
                      <td><button className="btn btn-danger">Delete</button>
                        <edit className="btn btn-dark m-2">Edit</edit>
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
export default (Category);