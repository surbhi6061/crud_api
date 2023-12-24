import express from "express";
import { v4 as uuidv4 } from "uuid";
uuidv4();

const router = express.Router();

let users = [];

//all routes in here are starting with /users

//GET all users
router.get("/", (req, res) => {
  res.status(200).json(users);
});

//GET user by id
router.get("/:userId", async (req, res) => {
  const userId = req.params.userId;
  if (!uuidv4(userId)) {
    return req.status(400).json({ error: "Invalid userID" });
  }
  const user = users.find((u) => u.id === userId);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.status(200).json(user);
});

//POST create new user
router.post('/', async(req,res)=>{
  const {username,age,hobbies}=req.body;
  if(!username || !age ||!hobbies){
    return res.status(400).json({error:'Missing requires fields'});
  }
  const newUser={
    id:uuidv4(),
    username,
    age,
    hobbies,
  };
  users.push(newUser);
  res.status(201).json(newUser);
  });

  //PUT to update user by id
  router.put('/:userId',async(req,res)=>{
    const userId=req.params.userId;
    if(!uuidv4(userId)){
      return res.status(400).json({error:'Invalid userId'});
    }
    const userIndex=users.findIndex((u)=>u.id===userId);
    if(userIndex===-1){
      return res.status(404).json({error:'User not found'});
    }
    const {username,age,hobbies}=req.body;
    if(!username ||!age ||!hobbies){
      return res.status(400).json({error:'Missing required fields'});
    }
    users[userIndex]={id:userId,username,age,hobbies};
    res.status(200).json(users[userIndex]);
  });

  //DELETE user by userID
  router.delete('/:userId',async(req,res)=>{
    const userId=req.params.userId;
    if(!uuidv4(userId)){
      return res.status(400).json({error:'Invalid userId'});
    }
    const userIndex=users.findIndex((u)=>u.id===userId);
    if(userIndex===-1){
      return res.status(404).json({error:'User not found'});
    }

    users.splice(userIndex,1);
    res.status(204).send();
  });
  export default router;


