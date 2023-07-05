import react, {Component} from "react";
class users extends Component
{
    constructor(props) {
        super(props);
        this.state = {};

    }
    render(){
        return(<div className="container mt-3">
        <div className="row">
          <div className="col-12">
            <div className="card shadow">
              <div className="card-header text-bg-dark">
                <h3>User management</h3>
              </div>
              <div className="card-body ">
              </div>
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th width="5%">Sr No</th>
                    <th width={10}>Email</th>
                    <th>Mobile</th>
                    <th>View Orders</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>asif.kazi@bsre.in</td>
                    <td>9874569874</td>
                    <td>
                      <a href="vieworder.html" className="btn btn-dark">View Order</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>);
    }
}
export default users;