var express = require('express');
var router = express.Router();
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.CLOUDINARY_CLOUD_NAME,
  api_key: process.CLOUDINARY_API_KEY,
  api_secret: process.CLOUDINARY_SECRET,
});

router.get('/get-images', (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization != process.env.API_KEY) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  const { search, per_page, next_cursor } = req.query;
  const dir = search == "aef" || search == "afnis" || search == "london" || search == "saudi" ? "drey/conferences" : "drey";

  const searchOptions = {
    type: 'upload',
    prefix: `${dir}/${search}`,
    max_results: per_page ?? 5,
  };
  if (next_cursor != "null" && next_cursor != "undefined") {
    searchOptions.next_cursor = next_cursor;
  }
  cloudinary.api.resources(searchOptions, (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).json({ error });
    } else {
      res.json({
        next_cursor: result.next_cursor,
        result: result.resources,
      });
    }
  });

});

module.exports = router;
