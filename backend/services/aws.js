const AWS = require('aws-sdk');
const { v4 } = require('uuid');

const uploadS3 = async (req) => {

    AWS.config.update({
        accessKeyId: process.env.AWS_ID,
        secretAccessKey: process.env.AWS_SECRET,
        region: 'us-west-1'
    });

    const s3 = new AWS.S3();

    const fileName = req.file.originalname.split('.');
    const fileType = fileName[fileName.length - 1];

    const params = {
        ACL: 'public-read',
        ContentType: req.file.mimetype,
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `${v4()}.${fileType}`,
        Body: req.file.buffer
    }

    let data = await new Promise((resolve, reject) => {
        s3.upload(params, (error, data) => {
            if (error) {
                return reject(error)
            }
            return resolve(data);
        });
    })

    return data;
}

module.exports = uploadS3;