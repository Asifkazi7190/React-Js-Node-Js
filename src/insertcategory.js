import React, { Component } from 'react';
class InsertCategory extends Component {
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
                <h3>Category management</h3>
              </div>
              <div className="card-body">
                <h5 className=" pb-3 border-bottom text-uppercase fw-bold">Add new category</h5>
                <form action encType="multipart/form-data  ">
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" placeholder="Category title" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="photo" className="form-label">Photo</label>
                    <input type="file" className="form-control" id="photo" name="photo" required accept="image/*" />
                  </div>
                  <b>Is this live?</b> <br />
                  <div className="form-check form-check-inline mt-1">
                    <input className="form-check-input" type="radio" name="islive" id="yes" defaultValue={1} />
                    <label className="form-check-label" htmlFor="yes">Yes</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="islive" id="no" defaultValue={0} />
                    <label className="form-check-label" htmlFor="no">No</label>
                  </div>
                  <div className="mt-3">
                    <button type="submit" className="btn btn-danger">Save</button>
                    <button type="reset" className="btn btn-dark">Clear all</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default InsertCategory;

