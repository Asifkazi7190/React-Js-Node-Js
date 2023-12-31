import React, { Component } from 'react';
import axios from 'axios';
class InsertProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    InsertProduct = (e) => {
        var ApiAddress = "https://www.theeasylearnacademy.com/shop/ws/insert_product.php";
        /*
               [{"error":"input is missing"}] 
               [{"error":"no"},{"success":"yes"},{"message":"product inserted"}]
           */
        axios({
            method: 'post',
            url: ApiAddress,
            responseType: 'json',
            // data: form
        }).then((response) => {
            var data = response.data;
            console.log(data);
            var error = data[0]['error'];
            if (error != 'no');
            else {
                var success = data[1]['success'];
                var message = data[2]['message'];
                alert(message);
                if (success == 'yes')
                    window.location = '/product'
            }
        });
        e.preventDefault();
    }
    ChangeValue = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    } 
    ChangeFile = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {

        return (

            <div className="container mt-3">
                <div className="row">
                    <div className="col-12">
                        <div className="card shadow">
                            <div className="card-header text-bg-dark">
                                <h3>Product management</h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.InsertProduct}>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                            <div className="form-floating mb-3 mt-3">
                                                <input type="text" className="form-control" id="title" placeholder="Product title" name="title" onChange={(e)=>this.ChangeValue(e)} />
                                                <label htmlFor="title">Product title
                                                </label></div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                            <div className="form-floating mt-3">
                                                <select className="form-select" id="categoryid" aria-label="Select categoryid" name="categoryid">
                                                    <option selected>Select categoryid</option>
                                                    <option value={1}>Laptop</option>
                                                    <option value={2}>Mobile</option>
                                                    <option value={3}>TV</option>
                                                    <option value={4}>Camera</option>
                                                </select>
                                                <label htmlFor="categoryid">Select category</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                            <label htmlFor="formFile" className="form-label">Default file input</label>
                                            <input className="form-control" type="file" id="formFile" onChange={(e)=>this.ChangeFile(e)}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                            <div className="form-floating mb-3 mt-3">
                                                <input type="number"onChange={(e)=>this.ChangeValue(e)} className="form-control" id="price" placeholder="Price" name="price" />
                                                <label htmlFor="price">price</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                            <div className="form-floating mb-3 mt-3">
                                                <input type="number" onChange={(e)=>this.ChangeValue(e)} className="form-control" id="stock" placeholder="Stock" name="stock" />
                                                <label htmlFor="stock">Stock</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                            <div className="form-floating mb-3 mt-3">
                                                <input type="number" onChange={(e)=>this.ChangeValue(e)}className="form-control" id="Weight" placeholder="weight" name="weight" />
                                                <label htmlFor="weight">weight</label>
                                            </div>
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
                                                <textarea className="form-control" name="detail" id="detail" style={{ "height": "100px" }} defaultValue={""} />
                                                <label htmlFor="detail">Detail</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                            <button type="submit" className="btn btn-dark w-100 mt-5" >Save</button>
                                        </div>
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
export default InsertProduct;

