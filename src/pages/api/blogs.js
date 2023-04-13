import * as fs from 'fs';

export default function handler(req, res) {
    // Use fs.readFile() method to read the file
    fs.readdir('blogdata', (err, data) => {
        if (err) {
            res.status(500).json({ error: "No such blog found" })
        }
        // console.log(req.query.slug)
        res.status(200).json(data)
    })
}
