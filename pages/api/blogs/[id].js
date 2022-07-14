import dbConnect from "../../../utils/dbConnect";
import Blog from "../../../models/Blog";
const morgan = require("morgan");

dbConnect();

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await runMiddleware(req, res, morgan("dev"));

  switch (method) {
    case "GET":
      try {
        const blog = await Blog.findById(id);

        if (!blog) {
          return res.status(400).send("Not found in database");
        }

        res.status(200).send(blog);
      } catch (error) {
        res.status(400).send(error.message);
      }
      break;
    case "PUT":
      let json;
      if (typeof req.body === "string") {
        json = JSON.parse(req.body);
      } else {
        json = req.body;
      }

      // console.log(JSON.stringify(req.body))
      // try {
      const blog = await Blog.findByIdAndUpdate(id, json, {
        new: true,
        runValidators: true,
      });

      if (!blog) {
        res.status(400).send("Not found in database");
      }

      res.status(201).send(blog);
      // } catch (error) {
      //     res.status(400).send(error.message)
      // }
      break;
    case "DELETE":
      try {
        const deletedBlog = await Blog.deleteOne({ _id: id });

        if (!deletedBlog) {
          res.status(400).send("Not found in database");
        }

        res.status(200).send("Successfully deleted from database");
      } catch (error) {
        res.status(400).send(error.message);
      }
      break;
    default:
      res.status(400).send("Failed");
      break;
  }
}
