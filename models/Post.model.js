const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
  title: { type: String, required: true },
  postPicture: { type: String, required: true },
  description: { type: String, required: true },
  languageTag: { type: String, required: true },
  author:{ type: Schema.Types.ObjectId, ref: "User" },
  },
  {
  // this second object adds extra properties: `createdAt` and `updatedAt`
  timestamps: true,
  }
);

// Post.findById(123).populate('author')

const Post = model("Post", postSchema);

module.exports = Post;
