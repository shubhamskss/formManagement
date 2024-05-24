const formModel=require("../models/formModel")
const fillForm=require("../models/fillForm")
async function createForm(req, res) {
  try {
    const { title, name, email, isGraduate } = req.body;
    let callfrom=1
    const errors = validateFormFields({ title, name, email, isGraduate },1);

    // Check for validation errors
    if (Object.keys(errors).length > 0) {
        return res.status(422).json({ errors });
    }

const formCrreate=await formModel.create(req.body) 

    return res.status(201).send(formCrreate)
  } catch (err) {
    console.log(err)
    return res.status(500).send("something went wrong")
  }
}


async function fillData(req,res){
    try{
        let formTitle=req.query.formTitle
        console.log(formTitle)
        if(!formTitle){return res.status(422).send("formTitle in query required")}
        let checkFormTitleInFormTable= await formModel.findOne({where:{title:formTitle},raw:true}) 
        console.log("llllllll",checkFormTitleInFormTable)
        if(!checkFormTitleInFormTable){return res.status(400).send("bad request as this formTitle is not save in our database")}
          const { name, email, isGraduate } = req.body;
          let callfrom=2
          const errors = validateFormFields({ undefined,name, email, isGraduate },callfrom);
          if (Object.keys(errors).length > 0) {
            return res.status(422).json({ errors });
        }
    let saveForm=await fillForm.create({title:formTitle,name:name,email:email,isGraduate:isGraduate})
    return res.status(201).send(saveForm)

}
catch(err){
console.log(err)
    return res.status(500).send("something went wrong")
}
}

async function getFIllData(req,res){
    try{
        let formTitle=req.query.formTitle
     
        if(!formTitle){return res.status(422).send("formTitle in query required")}
        let checkFormTitleInFormTable= await formModel.findOne({where:{title:formTitle},raw:true}) 
     
        if(!checkFormTitleInFormTable){return res.status(400).send("bad request as this formTitle is not save in our database")}
       
    let getForm=await fillForm.findAll({where:{title:formTitle},raw:true})
    return res.status(201).send(getForm)

}
catch(err){
console.log(err)
    return res.status(500).send("something went wrong")
}
}













function validateFormFields({ title, name, email, isGraduate },callfrom) {
    const errors = {};

    // Validate title
    if(callfrom==1){
    if (!title || title.trim().length === 0) {
        errors.title = 'Title is required';
    }}

    // Validate name
    if (!name || name.trim().length === 0) {
        errors.name = 'Name is required';
    }

    // Validate email
    if (!email || email.trim().length === 0) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = 'Invalid email format';
    }

    // Validate isGraduate
    if (isGraduate !== true && isGraduate !== false) {
        errors.isGraduate = 'isGraduate should be a boolean value';
    }

    return errors;
}

module.exports.createForm = createForm;
module.exports.fillData=fillData
module.exports.getFIllData=getFIllData