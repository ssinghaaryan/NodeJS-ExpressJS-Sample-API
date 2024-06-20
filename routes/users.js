import express from 'express';
import { createUser, deleteUser, getUsers, getUserById, updateUser } from '../controllers/users.js';

const router = express.Router();

// All the Routes here are starting with endpoint -> /users
// router.get('/users', (req, res) => {

//GET Request Updated
router.get('/', getUsers);

// GET Request
// router.get('/', (req, res) => {
//     // console.log(users);
//     res.send(usersArray);
// });

//---------------------------------------

//Moved this function in the controllers user.js file and importing it from there.
// const createUser = (req, res) => {
    
//     const user = req.body;

//     usersArray.push({ ...user, id: uuidv4() });

//     res.send(`${user.firstName} added to the DB.`);

// };

//POST Request Updated
router.post('/', createUser);

// POST Request
// router.post('/', (req, res) => {
    
//     const user = req.body;

//     const userId = uuidv4();

//     const userWithId = { ...user, id: uuidv4()};

//     users.push(user); // Pushing the newly added user to the users array.

//     users.push(userWithId); // Pushing the newly created object with the id added, to the users array.

//     usersArray.push({ ...user, id: uuidv4() });

//     res.send(`${user.firstName} added to the DB.`);

// });

// -----------------------------------

// GET User by ID Updated
router.get('/:id', getUserById);

// GET User by ID
// router.get('/:id', (req, res) => {

//     const { id } = req.params;

//     const foundUser = usersArray.find((user) => user.id === id);

//     res.send(foundUser);

// })

// --------------------------------------

// DELETE User
router.delete('/:id', deleteUser);

// DELETE User by ID
// router.delete('/:id', (req, res) => {

//     const { id } = req.params;

//     usersArray = usersArray.filter((user) => user.id !== id);

//     res.send(`User ${id} is deleted from the DB.`);

// })

// ---------------------------------------

// UPDATE User Updated
router.patch('/:id', updateUser);

// UPDATE User
// router.patch('/:id', (req, res) => {

//     const { id } = req.params;

//     const user = usersArray.find((user) => user.id === id);

//     const { firstName, lastName, age } = req.body;

//     if(firstName) user.firstName = firstName;
//     if(lastName) user.lastName = lastName;
//     if(age) user.age = age;

//     res.send(`${user.firstName} details updated.`);

// })

export default router;
// module.exports = router;