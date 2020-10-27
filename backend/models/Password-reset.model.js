const mongoose = require('mongoose');
const { uid } = require('rand-token');

const passwordResetSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        index: true
    },
    token: {
        type: String,
        unique: true,
        index: true,
        default: () => uid(32)
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 3600
    }
});

const passwordResetModel = mongoose.model('PasswordReset', passwordResetSchema);

module.exports = passwordResetModel;