import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AddBudget from './AddBudget';
import BudgetList from './BudgetList';
import EditBudget from './EditBudget';
import AddGoal from './AddGoal';
import EditGoal from './EditGoal';
import Home from './Home';
import GoalList from './GoalList';
import GoalView from './GoalView';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/budgets/new' element={<AddBudget/>}/>
    <Route path='/budgets/list' element={<BudgetList/>}/>
    <Route path='/budgets/edit/:id' element={<EditBudget/>}/>
    <Route path='/goals/new' element={<AddGoal/>}/>
    <Route path='/goals/list' element={<GoalList/>}/>
    <Route path='/goals/edit/:id' element={<EditGoal/>}/>
    <Route path='/goals/view/:id' element={<GoalView/>}/>
  </Routes>
  </BrowserRouter>
);
