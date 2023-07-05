import react from 'react';
import React, {Component} from 'react';
class OrdersDetail extends Component {
    constructor(props) 
    {
        super(props);
            this.state = {};
        
    }
    render(){
        return(<div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <div className="card shadow">
              <div className="card-header text-bg-dark">
                <h3>Order management</h3>
              </div>
              <div className="card-body">
              </div>
              <div className="container-fluid">
              </div><table className="table table-bordered table-striped m-auto">
                <thead>
                  <tr>
                    <th>Order No</th>
                    <th>Order Date</th>
                    <th>Order Detail</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Payment Mode</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <th width={150}>20-09-2023</th>
                    <th>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit soluta nihil quidem
                      excepturi accusamus.</th>
                    <th width={100}>₹ 125000</th>
                    <th>Confirmed</th>
                    <th width={100}>Cash on delivery</th>
                  </tr>
                </tbody>
              </table><h3 className="m-2">Order items</h3><table className="table table-bordered table-striped mt-2">
                <thead>
                  <tr className="bg-dark text-light">
                    <th width="7%">Sr No</th>
                    <th width="7%">Name</th>
                    <th width="7%" className="text-end">Price</th>
                    <th width="10%" className="text-end">Quantity</th>
                    <th width="10%" className="text-end">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td><a href="product.html">Aser Laptop</a></td>
                    <td className="text-end">50000</td>
                    <td className="text-end">5</td>
                    <td className="text-end">250000</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td><a href="product.html">Nokia Mobile</a></td>
                    <td className="text-end">10000</td>
                    <td className="text-end">2</td>
                    <td className="text-end">20000</td>
                  </tr>
                  <tr>
                    <td colSpan={4}>
                      <h5>Total</h5>
                    </td>
                    <td className="text-end">270000</td>
                  </tr>
                  <tr>
                    <td colSpan={2}> <a href className="btn btn-dark w-100">Print</a></td>
                    <td colSpan={2}>
                      <div className="form-floating">
                        <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                          <option selected>Order Status</option>
                          <option value={1}>Confirmed</option>
                          <option value={2}>Dispatched</option>
                          <option value={3}>Delivered</option>
                        </select>
                        <label htmlFor="floatingSelect">Works with selects</label>
                      </div>
                    </td>
                    <td colSpan={2}> <a href className="btn btn-dark w-100">Save changes</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      );
    }
}
export default OrdersDetail;