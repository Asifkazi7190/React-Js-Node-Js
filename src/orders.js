import React, { Component } from 'react';
class Orders extends Component {
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
                                <h3>Order management</h3>
                            </div>
                            <div className="card-body">
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th width="5%">Order <br /> No</th>
                                            <th width="10%">Order Date</th>
                                            <th>Order Detail</th>
                                            <th width="10%">Amount</th>
                                            <th width="10%">Status</th>
                                            <th width="10%">Payment <br /> Mode</th>
                                            <th width="15%">View Detail</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>24-05-2023</td>
                                            <td>Ankit Patel <br />
                                                105 - Eva surbhi, Opp aksharwadi <br />
                                                Waghawadi Road - Bhavnagar <br />
                                                Contact No - 9662512857
                                            </td>
                                            <td>₹ 125000</td>
                                            <td>Confirmed</td>
                                            <td>Cash on delivery</td>
                                            <td>
                                                <a href="/order-detail" className="btn btn-dark">
                                                    View
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default Orders;
