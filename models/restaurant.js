const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    rating: Number,
    content: String,
},{
    timestamps: true
})

const restaurantSchema = new Schema({
    title: String,
    cuisine: String,
    addedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
        },
    reviews: [reviewSchema]
},{
    timestamps: true
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
