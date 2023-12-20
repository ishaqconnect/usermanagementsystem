const Joi = require("joi");
const fs = require("fs");
const User = require("../models/user");
const UserDTO = require("../dto/user");
const mongodbIdPattern = /^[0-9a-fA-F]{24}$/;

const userController = {
  async create(req, res, next) {
    // 1. validate req body
    // 3. add to db
    // 4. return response

      const createUserSchema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().required(),
      role:Joi.string().required(),
    });

    const { error } = createUserSchema.validate(req.body);

    if (error) {
      return next(error);
    }

    const { name,  email, role } = req.body;

    let newUser;
    try {
      newUser = new User({
        name,
        email,
        role,
      });

      await newUser.save();
    } catch (error) {
      return next(error);
    }

    const userDto = new UserDTO(newUser);

    return res.status(201).json({ User: userDto });
  },

  async getAll(req, res, next) {
    try {
      const users = await User.find({});

      const usersDto = [];

      for (let i = 0; i < users.length; i++) {
        const dto = new UserDTO(users[i]);
        usersDto.push(dto);
      }

      return res.status(200).json({ users: usersDto });
    } catch (error) {
      return next(error);
    }
  },
 async delete(req, res, next) {
    // validate id
    // delete user
    
    const deleteUserSchema = Joi.object({
      id: Joi.string().regex(mongodbIdPattern).required(),
    });

    const { error } = deleteUserSchema.validate(req.params);

    const { id } = req.params;

    // delete user
    try {
      await User.deleteOne({ _id: id });

    } catch (error) {
      return next(error);
    }

    return res.status(200).json({ message: "User deleted" });
  },
};

module.exports = userController;
