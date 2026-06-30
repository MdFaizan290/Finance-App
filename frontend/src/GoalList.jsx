import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function GoalList() {
    const [goals, setGoals] = useState([]);
    const ApiUrl = "http://localhost:5000/api/goals";
    const fetchGoal = async () => {
        const allGoal = await axios.get(ApiUrl);
        setGoals(allGoal.data);
    }
    useEffect(() => {
        fetchGoal();
    }, []);
    const deleteGoal = async (id) => {
        const dltGoal = await axios.delete(`${ApiUrl}/${id}`);
        console.log(dltGoal.data.dltGoal);
        fetchGoal();
    }
    return (
        <div>
            <h1 className="text-center mt-5 mb-5 ">Your Goal List</h1>
            {
                goals.length === 0 ? (<p className="text-center">No Goals</p>) : (
                    goals.map((goal) => (
                        <div key={goal._id} className="card mb-2 cd" style={{
                            backgroundColor: goal.currentAmount === goal.targetAmount ? "#a5fdba" : "rgb(244, 244, 186)",
                        }}>
                            <div className="card-body">
                                <h3>{goal.title}</h3>
                                <h5>&#8377; {goal.targetAmount}</h5>
                                <p style={{ color: "#046638", fontWeight: "bolder" }}>{goal.currentAmount === goal.targetAmount && "Completed ✅"}</p>
                                <p>Goal Created On - {new Date(goal.createdAt).toLocaleString()}</p>
                                <Link to={`/goals/edit/${goal._id}`}><button className="btn btn-success me-3">Edit</button></Link>
                                <button className="btn btn-danger ms-3 me-3" onClick={() => deleteGoal(goal._id)}>Delete</button>
                                <Link to={`/goals/view/${goal._id}`}><button className='btn btn-primary ms-3'>View</button></Link>
                            </div>
                        </div>
                    ))
                )
            }
            <div className="text-center"><Link to={"/goals/new"} className="btn btn-primary mt-4 mb-5">Add Goal</Link></div>
        </div >
    );
}


export default GoalList;