import Carousel from '../models/crousel.js';
import mongoose from 'mongoose';

// Add a new carousel item
export const addCarousel = async (req, res) => {
  try {
    const newCarouselItem = new Carousel(req.body);
    const savedItem = await newCarouselItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all carousel items
export const getCarousel = async (req, res) => {
  try {
    const carouselItems = await Carousel.find();
    res.status(200).json(carouselItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a carousel item by ID
export const updateCarousel = async (req, res) => {
    try {
      const id = req.params.id;
      console.log(`Updating carousel item with ID: ${id}`);
  
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid ID format' });
      }
  
      const updatedCarouselItem = await Carousel.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
      if (!updatedCarouselItem) {
        return res.status(404).json({ message: 'Carousel item not found' });
      }
      res.status(200).json(updatedCarouselItem);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

// Delete a carousel item by ID
export const deleteCarousel = async (req, res) => {
  try {
    const deletedCarouselItem = await Carousel.findByIdAndDelete(req.params.id);
    if (!deletedCarouselItem) {
      return res.status(404).json({ message: 'Carousel item not found' });
    }
    res.status(200).json({ message: 'Carousel item deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
