const Budget = require("../models/budget");


// Show All Budgets
module.exports.showAllBgt = async (req, res) => {
    try {
        const budgets = await Budget.find();
        res.json(budgets);
        // res.send("All Budget Route");
    } catch (err) {
        res.status(500).json({ message: err });
    }
}

// Add New Budget
module.exports.addNewBgt = async (req, res) => {
    // res.send("Add Budget Route");
    try {
        const { category, amount } = req.body;
        const addBudget = await Budget.create({
            category,
            amount
        });
        res.json(addBudget);
    } catch (err) {
        res.status(500).json({ message: err });
    }
}
// Show Single Budget 
module.exports.showBgt = async (req, res) => {
    // res.send("Single Budget Route");
    try {
        const  id  = req.params.id;
        const budget = await Budget.findById(id);
        if (!budget) {
            return res.json({ message: "No Budget Found" });
        }
        res.json(budget);
    } catch (err) {
        res.status(500).json({ message: err });
    }
}

//Update Budget
module.exports.editBgt = async (req, res) => {
    // res.send("Update Budget Route");
    try {
        const { id } = req.params;
        // const budget = await Budget.findById(id);
        // if(!budget){
        //     return res.status(400).json({message:"Id Not Found"});
        // }
        const { category, amount } = req.body;
        const newBudget = await Budget.findByIdAndUpdate(id,
            {
                category,
                amount
            },
            {
                runValidators: true,
                new: true
            }
        );
        res.json(newBudget);
    } catch (err) {
        res.status(500).json({ message: err });
    }
}
//Delete Budget
module.exports.deleteBgt = async (req, res) => {
    // res.send("Delete Budget Route");
    try {
        const { id } = req.params;
        const dltBudget = await Budget.findByIdAndDelete(id);
        if (!dltBudget) {
            return res.json({ message: "No Budget To Delete/ already deleted" });
        }
        res.json({ message: "Budget Deleted Successfully", dltBudget });
    } catch (err) {
        res.status(500).json({ message: err });
    }
}