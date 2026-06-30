import React, { useState } from "react";
import "./AddBudget.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AddBudget() {
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState(null);
    const ApiUrl = "http://localhost:5000/api/budgets";
    const handleCategory = (e) => {
        // console.log(e.target.value);
        setCategory(e.target.value);
    }
    const handleAmount = (e) => {
        setAmount(e.target.value);
        // console.log(e.target.value);
    }
    const addBudget = async () => {
        if (!category || !amount) {
            return;
        }
        const addData = await axios.post(ApiUrl, {
            category,
            amount
        });
        console.log(`Data Added ${addData.data}`);
    }
    return (
        <div>
            <h1 className="text-center mt-5 mb-5">Budget Page</h1>
            <div class="card budget-form" >
                <div class="card-body form-body">
                    <h3 className="fs-3 mb-5">Budget</h3>
                    <input placeholder="Enter Category" value={category} onChange={handleCategory} />
                    <input placeholder="Enter Amount" type="number" value={amount} onChange={handleAmount} />
                    <Link to={"/budgets/list"}><button className="btn btn-success" onClick={addBudget}>Add Budget</button></Link>
                </div>
            </div>
        </div>
    )
}