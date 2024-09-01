import mongoose from 'mongoose';


const carouselSchema = new mongoose.Schema({
  imagePath: {
    type: String,
    required: [true, 'Image path is required'],
    trim: true
  },
  imageName: {
    type: String,
    required: [true, 'Image name is required'],
    trim: true
  }
}, {
  timestamps: true 
});


const Carousel = mongoose.model('Carousel', carouselSchema);

export default Carousel;
