import multer from "multer";
import { extname, resolve, dirname } from "path"
import crypto from "crypto"
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
    storage: multer.diskStorage({
        destination: resolve(__dirname, "..", "..", "temp", "uploads"),
        filename: (req, file, callback) => {
            crypto.randomBytes(16, (err, res) => {
                if(err) return callback(err);

                return callback(null, res.toString("hex") + extname(file.originalname))
            });
        }
    })
}