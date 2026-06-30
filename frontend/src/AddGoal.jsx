import axios from 'axios';
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

function AddGoal() {
    const [title, setTitle] = useState("");
    const [targetAmount, setTargetAmount] = useState(null);
    const ApiUrl = "http://localhost:5000/api/goals";
    const navigate = useNavigate();
    const handleTitle = (e) => {
        // console.log(e.target.value);
        setTitle(e.target.value);
    }
    const handleTargetAmount = (e) => {
        setTargetAmount(e.target.value);
        // console.log(e.target.value);
    }
    const addGoal = async () => {
        if(!title || !targetAmount){
            return;
        }
        const goal = await axios.post(ApiUrl,{
            title,
            targetAmount
        });
        alert("Goal Added Successfully");
        console.log(goal.data);
        navigate("/goals/list")
    }
    return (
        <div>
            <h1 className="text-center mt-5 mb-5">Goal Page</h1>
            <div class="card budget-form" >
                <div class="card-body form-body">
                    <h3 className="fs-3 mb-5">Add Your Goal</h3>
                    <input placeholder="Enter Your Goal" value={title} onChange={handleTitle} />
                    <input placeholder="Enter Target Amount" type="number" value={targetAmount} onChange={handleTargetAmount} />
                    <button className="btn btn-success" onClick={addGoal}>Add Goal</button>
                </div>
            </div>
        </div>
    );
}

export default AddGoal;