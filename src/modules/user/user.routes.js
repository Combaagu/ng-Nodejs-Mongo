// const express = require("express");
// const userService = require("./user.service");

// const router = express.Router();

// // GET /api/user
// router.get("/api/user", async (req, res) => {
//   // #swagger.tags = ['Usuario']
//   try {
//     params = JSON.parse(req.headers['params'])

//     let paginated = await userService.paginated(params)
//     return res.status(200).send(paginated);

//   } catch (error) {
//     console.log(error)
//     return res.status(500).send(error);
//   }
// });

// // GET /api/user/:id
// router.get("/api/user/:id",  async (req, res) => {
//   // #swagger.tags = ['Usuario']
//   try {
//     const userId = req.params.id;
//     const user = await userService.findOneById(userId);
//     return res.status(200).send(user);

//   } catch (error) {
//     console.log(error);
//     return res.status(500).send(error);
//   }
// });

// // POST /api/user
// router.post("/api/user", async (req, res) => {
//   // #swagger.tags = ['Usuario']
//   try {
//     const newUser = req.body;
//     console.log(newUser);
//     const user = await userService.save(newUser);
//     return res.status(201).send(user);

//   } catch (error) {
//     console.log(error);
//     return res.status(500).send(error);
//   }
// });

// // PUT /api/user/:id
// router.put("/api/user/:id",  async (req, res) => {
//   // #swagger.tags = ['Usuario']
//   try {
//     const userId = req.params.id;
//     const updatedUser = req.body;
//     const user = await userService.update(userId, updatedUser);
//     return res.status(200).send(user);

//   } catch (error) {
//     console.log(error);
//     return res.status(500).send(error);
//   }
// });

// // DELETE /api/user/:id
// router.delete("/api/user/:id", async (req, res) => {
//   // #swagger.tags = ['Usuario']
//   try {
//     const userId = req.params.id;
//     await userService.remove(userId);
//     return res.status(200).send("Usuario eliminado correctamente.");

//   } catch (error) {
//     console.log(error);
//     return res.status(500).send(error);
//   }
// });

// module.exports = router;

const express = require("express");
const userService = require("./user.service");

const router = express.Router();

// GET /api/user
router.get("/api/user", async (req, res) => {
  // #swagger.tags = ['Usuario']
  // #swagger.parameters['page'] = { in: 'query', description: 'Page number', type: 'integer' }
  // #swagger.parameters['limit'] = { in: 'query', description: 'Number of items per page', type: 'integer' }
  // #swagger.parameters['role'] = { in: 'query', description: 'Role of the user', type: 'string', enum: ['Task', 'Gammer', 'Client', 'Provider'] }
  try {
    const { page = 1, limit = 10, role } = req.query;
    const params = { page: Number(page), limit: Number(limit), role };

    const paginated = await userService.paginated(params);
    return res.status(200).send(paginated);

  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

// GET /api/user/:id
router.get("/api/user/:id", async (req, res) => {
  // #swagger.tags = ['Usuario']
  try {
    const userId = req.params.id;
    const user = await userService.findOneById(userId);
    return res.status(200).send(user);

  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

// POST /api/user
router.post("/api/user", async (req, res) => {
  // #swagger.tags = ['Usuario']
  // #swagger.parameters['body'] = { in: 'body', description: 'User object', schema: { $ref: '#/definitions/User' } }
  try {
    const newUser = req.body;
    const user = await userService.save(newUser);
    return res.status(201).send(user);

  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

// PUT /api/user/:id
router.put("/api/user/:id", async (req, res) => {
  // #swagger.tags = ['Usuario']
  // #swagger.parameters['body'] = { in: 'body', description: 'Updated user object', schema: { $ref: '#/definitions/User' } }
  try {
    const userId = req.params.id;
    const updatedUser = req.body;
    const user = await userService.update(userId, updatedUser);
    return res.status(200).send(user);

  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

// DELETE /api/user/:id
router.delete("/api/user/:id", async (req, res) => {
  // #swagger.tags = ['Usuario']
  try {
    const userId = req.params.id;
    await userService.remove(userId);
    return res.status(200).send("Usuario eliminado correctamente.");

  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

module.exports = router;
