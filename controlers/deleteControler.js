const employeLIst = require("../model/employeList")

const deleteControler = async (req, res) => {
    const { id } = req.body

    try {
        const employeDelete = await employeLIst.findByIdAndDelete({_id:id})

        if(!employeDelete){
            res.status(401).json({message:"employe detial not found"})
        }

        res.status(200).json({message:"Employee Data Deleted", employeDelete})
        
    } catch (error) {
        console.log('Delete error:', error);
        res.status(400).json({ message: 'Delete failed', error: error.message });
    }
}

module.exports = deleteControler