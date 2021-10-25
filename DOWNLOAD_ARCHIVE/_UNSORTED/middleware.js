const yup = require("yup");
const db = require("../../data/dbConfig");
const schema = yup.object().shape({
    task_description: yup.string().required(),
    task_notes: yup.string(),
    task_completed: yup.boolean(),
    project_id: yup.number().required().integer().moreThan(-1).transform(async(project_id)=>{
        const projectsFound = await db("projects").where({project_id});
        if(projectsFound.length !== 1){
            return yup.ValidationError("project_id not found");
        }
        else{
            return project_id;
        }
    })
});

const checkTaskShape=async(req,res,next)=>{
    const keys = Object.keys(schema.getDefaultFromShape())
    for(const key of keys){
        try{
            await yup.reach(schema,key,req.body[key]);
        }
        catch(error){
            if(key === "project_id"){
                res.status(404).json({message:error.errors[0]});
            }
            else{
                res.status(400).json({message:error.errors[0]});
            }
        }
    }
    next();
};
module.exports = {
    checkTaskShape
}