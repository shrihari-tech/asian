const express = require('express');
const User = require('../Schema/User');
const router = express.Router();

// Create a new user
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
 })

// Get all users
router.get('/getUsers',async(req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
})

// Get a user by ID
router.get('/getUser/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user', error });
    }
})

//delete a user by ID
router.delete('/deleteUser/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error });
    }
})

// Update a user by ID
router.put('/updateUser/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    try{
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        if(name) user.name = name;
        if(email) user.email = email;
        if(password) user.password = password;
        await user.save();
        res.status(200).json({ message: 'User updated successfully!' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating user', error });
    }
})

module.exports = router;