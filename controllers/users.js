import { v4 as uuidv4 } from 'uuid';

let usersArray = [];

export const createUser = (req, res) => {
    
    const user = req.body;

    usersArray.push({ ...user, id: uuidv4() });

    res.send(`${user.firstName} added to the DB.`);

};

export const getUsers = (req, res) => {
    // console.log(users);
    res.send(usersArray);
};

export const getUserById = (req, res) => {

    const { id } = req.params;

    const foundUser = usersArray.find((user) => user.id === id);

    res.send(foundUser);

};

export const deleteUser = (req, res) => {

    const { id } = req.params;

    usersArray = usersArray.filter((user) => user.id !== id);

    res.send(`${user.firstName} is deleted from the DB.`);

};

export const updateUser = (req, res) => {

    const { id } = req.params;

    const user = usersArray.find((user) => user.id === id);

    const { firstName, lastName, age } = req.body;

    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send(`${user.firstName} details updated.`);

};