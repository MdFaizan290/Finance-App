import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function BudgetList() {
    const [budget, setBudget] = useState([]);
    const ApiUrl = `http://localhost:5000/api/budgets`;
    const fetchBudget = async () => {
        const budgets = await axios.get(ApiUrl);
        setBudget(budgets.data);
        console.log(budgets.data);
    }
    useEffect(() => {
        fetchBudget();
    }, []);

    const deleteBudget = async (id) => {
        const dltBudget = await axios.delete(`${ApiUrl}/${id}`);
        console.log(dltBudget);
        fetchBudget();
    }
    return (
        <div>
            <h1 className="text-center mt-5 mb-5">Budget List</h1>
            {
                budget.length === 0 ? (<p className="text-center">No Budget</p>) : (
                    budget.map((list) => (
                        <div key={list._id} className="card mb-2" style={styles.card}>
                            <div className="card-body" style={styles.cardBody}>
                                <h3>{list.category}</h3>
                                <h5>&#8377; {list.amount}</h5>
                                <p>Budget Created On - {new Date(list.createdAt).toLocaleString()}</p>
                                <Link to={`/budgets/edit/${list._id}`}><button className="btn btn-success me-3">Edit</button></Link>
                                <button className="btn btn-danger ms-3" onClick={() => deleteBudget(list._id)}>Delete</button>
                            </div>
                        </div>
                    ))
                )
            }
            {/* <button >Show All Budget</button> */}
            <div className="text-center"><Link to={"/budgets/new"} className="btn btn-primary mt-4 mb-5">Add Budget</Link></div>
        </div>
    );
}

const styles = {
    card: {
        width: "40%",
        textAlign: "center",
        padding: "20px",
        margin:"0 auto",
        backgroundColor:"rgb(240, 240, 173)"
    },
    cardBody:{
        
    },
    
}
export default BudgetList;