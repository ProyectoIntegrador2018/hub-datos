const AWS = require('aws-sdk');
const { v4 } = require('uuid');

/**
 * @param {Request} req Request object
 * @param {string} loc The directory name in the S3 bucket
 */
const uploadS3 = async (req, loc) => {

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
        Key: `${loc}/${v4()}.${fileType}`,
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


/**
 * @param {string} loc The directory name in the S3 bucket
 * @param {string} fileName The name of the file to be deleted
 */
const deleteS3 = async (loc, fileName) => {

    AWS.config.update({
        accessKeyId: process.env.AWS_ID,
        secretAccessKey: process.env.AWS_SECRET,
        region: 'us-west-1'
    });

    const s3 = new AWS.S3();


    var params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `${loc}/${fileName}`
    };

    let data = await new Promise( (resolve, reject) => {
        s3.deleteObject(params, (err, data) => {
            if (err) {
                return reject(error);
            }
            return resolve();
        });
    })

    return data;
}

module.exports = { 
    uploadS3,
    deleteS3
};