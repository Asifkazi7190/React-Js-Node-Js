import React, {Component} from "react";
class AdminHome extends Component{
    constructor(props){
        super(props);
        this.state= { };
    }
    render(){
        return(<div className="container mt-3">
        <div className="row">
          <div className="col-12">
            <div className="card shadow">
              <div className="card-header text-bg-dark">
                <h3>Home/Dashboard</h3>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-xl-3 col-sm-6 col-12">
                    <div className="card shadow border-0 text-bg-dark">
                      <div className="card-body">
                        <div className="row">
                          <div className="col ">
                            <span className="h6 font-semibold text-white text-sm d-block mb-2">Category</span>
                            <span className="h3 font-bold mb-0">20</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 col-12">
                    <div className="card shadow border-0 text-bg-dark">
                      <div className="card-body">
                        <div className="row">
                          <div className="col ">
                            <span className="h6 font-semibold text-white text-sm d-block mb-2">Category</span>
                            <span className="h3 font-bold mb-0">20</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 col-12">
                    <div className="card shadow border-0 text-bg-dark">
                      <div className="card-body">
                        <div className="row">
                          <div className="col ">
                            <span className="h6 font-semibold text-white text-sm d-block mb-2">Category</span>
                            <span className="h3 font-bold mb-0">20</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 col-12">
                    <div className="card shadow border-0 text-bg-dark">
                      <div className="card-body">
                        <div className="row">
                          <div className="col ">
                            <span className="h6 font-semibold text-white text-sm d-block mb-2">Category</span>
                            <span className="h3 font-bold mb-0">20</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
    }
}
export default AdminHome;