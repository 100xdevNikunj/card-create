const express = require("express");
require('dotenv').config();
const { mongoose, Card } = require("./db"); 
const app = express();
app.use(express.json());

// Create a new card
app.post("/create", async (req, res) => {
    try {
      const { name, description, social, Interests } = req.body;
  
      // Create a new card instance
      const newCard = new Card({
        name,
        description,
        social,
        Interests,
      });
  
      // Save the card to the database
      const savedCard = await newCard.save();
      res.status(201).json(savedCard);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  

// Read all cards
app.get("/cards", async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a card
app.patch("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, social, Interests } = req.body;

    const updatedCard = await Card.findByIdAndUpdate(
      id,
      { name, description, social, Interests },
      { new: true }
    );

    res.json(updatedCard);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a card
app.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await Card.findByIdAndDelete(id);

    res.json({ message: "Card deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(3000, () => {
  console.log("App is listening on 3000");
});
