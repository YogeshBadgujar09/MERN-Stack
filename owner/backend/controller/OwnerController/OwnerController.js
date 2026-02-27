const OwnerModel = require("../../model/OwnerModel");
const bcrypt = require("bcrypt");

exports.registerOwner = async (req, res) =>{

    try {

        const { ownerEmail } = req.body;

        let existingOwner = await OwnerModel.findOne({ ownerEmail });

        console.log("Data :" ,existingOwner);
        // console.log("Condition One :", !existingOwner.ownerVerified );
        // console.log("Condition 2",  existingOwner.ownerAccountStatus === "DEACTIVE")

        if(existingOwner != null && !existingOwner.ownerVerified 
             && existingOwner.ownerAccountStatus === "DEACTIVE")
        {
            console.log("Delete unverified Recorde .... !!! ");
            await OwnerModel.deleteOne({ownerEmail});
            existingOwner = null;
        }
        
        if(existingOwner === null)    {
            const owner = new OwnerModel( req.body );

            let tempPassword = passwordGenTemps();
            owner.ownerPassword = await bcrypt.hash( tempPassword.toString(), 10);

            await owner.save();
            res.status(201).json({ message: "Owner registered successfully", owner });
        }else{
            return res.status(409).json({
                success: false,
                message: "Email already exists",
            });  
         }
       
    } catch (error) {
        res.status(500).json({ message: "Error registering owner", error: error.message });
    }
};


function passwordGenTemps(){
         return Math.floor(100000 + Math.random() * 900000).toString();
}

