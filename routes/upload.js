const Router = require('koa-router');
const multer = require('koa-multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log('destination');
    cb(null, 'client/dist/uploads');
  },
  filename: (req, file, cb) => {
    console.log('originalname');
    cb(null, file.originalname);
  }
});

console.log('upload');

const upload = multer({ storage });

const router = new Router();

router.post('/upload', upload.single('image'), async (ctx, next) => {
});

module.exports = router;
