import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return ( 
        <>
        <h1 className='text-center mt-5 mb-5'>Home Page</h1>
        <div className='text-center'><Link to={"/goals/new"} className='btn btn-dark me-5 w-25 p-3 mb-3 mt-3'>Add Goal</Link></div>
        <div className='text-center'><Link to={"/goals/list"} className='btn btn-dark me-5 w-25 p-3 mb-3 mt-3'>Goal Lists</Link></div>
        <div className='text-center'><Link to={"/budgets/new"} className='btn btn-dark me-5 w-25 p-3 mb-3 mt-3'>Add Budget</Link></div>
        <div className='text-center'><Link to={"/budgets/list"} className='btn btn-dark me-5 w-25 p-3 mb-3 mt-3'>Budget Lists</Link></div>
        </>
     );
}

export default Home;