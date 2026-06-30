import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function GoalView() {
    const { id } = useParams();
    const [goal, setGoal] = useState({});
    const [addAmount, setAddAmount] = useState(false);
    const [saving, setSaving] = useState(null);
    const ApiUrl = `http://localhost:5000/api/goals`;

    const handleSaving = (e) => {
        setSaving(e.target.value);
        console.log(e.target.value);
    }
    const viewGoal = async () => {
        const res = await axios.get(`${ApiUrl}/${id}`);
        setGoal(res.data);
    }
    useEffect(() => {
        viewGoal();
    }, []);

    const updateSaving = async () => {
        const currAmt = goal.currentAmount + Number(saving);
        if (currAmt === goal.targetAmount) {
            alert("goal completed");
        }
        else if (currAmt > goal.targetAmount) {
            alert("Enter less amount");
            // return;
        }

        const res = await axios.patch(`${ApiUrl}/saving/${id}`, {
            currentAmount: saving,
        });
        console.log(res.data);
        setAddAmount(false);
        viewGoal();
    }
    const fill = (goal.currentAmount / goal.targetAmount) * 100;

    return (
        <div>
            <h1 className='text-center mb-5 mt-5'>Your Saving Goal</h1>
            <div className="card cd">
                <div className="card-body" >
                    <h2 style={styles.cardBody}>Goal : {goal.title}</h2>
                    <h3 style={styles.cardBody}>Target : &#8377; {goal.targetAmount}</h3>
                    <h3 style={styles.cardBody}>Savings : &#8377; {goal.currentAmount}</h3>
                    <p style={styles.p}>Created At : {new Date(goal.createdAt).toLocaleString()}</p>
                    <p style={styles.p}>Updated At : {new Date(goal.updatedAt).toLocaleString()}</p>
                </div>
                {
                    addAmount ? (
                        <div style={styles.inputDiv}>
                            <input placeholder='Enter Amount' type='number' value={saving} onChange={handleSaving} style={styles.input} />
                            <button className='btn btn-primary mt-0' onClick={updateSaving}>Add</button>
                        </div>
                    ) :
                        (<button className='btn btn-success' disabled={goal.currentAmount === goal.targetAmount} onClick={() => setAddAmount(true)}>Add Saving</button>)
                }

            </div>
            <h1 className='text-center mt-5'>Goal Progress Bar </h1>
            <div className="progress mt-5" style={{ margin: "0 auto", width: "70vw" }}>
                <div className="progress-fill" style={{ width: `${fill}%` }}></div>
                {/* {fill.toFixed(0)}% */}
            </div>
            {fill === 100 && (<h5 className='text-center mt-3' style={{ color: "green" }}>Goal Completed!</h5>)}

        </div>
    );
}

const styles = {
    p: {
        fontSize: "0.8rem",
        marginTop: "20px"
    },
    cardBody: {
        lineHeight: "50px"
    },
    inputDiv: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
        flexDirection: "column"
    },
    input: {
        width: "250px",
        marginBottom: "10px",
        padding: "10px",
        textAlign: "center",
    }
}
export default GoalView;