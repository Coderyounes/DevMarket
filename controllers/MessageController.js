const Message = require('../models/message');

// Send Message
exports.sendMessage = async (req, res) => {
  const { chatId, senderId, text } = req.body;

  try {
    await Message.sendMessage(chatId, senderId, text);
    res.status(200).send('Message sent successfully');
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).send('Failed to send message');
  }
};

// Get Messages
exports.getMessages = async (req, res) => {
  const { chatId } = req.params;

  try {
    const messages = await Message.getMessages(chatId);
    res.status(200).json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).send('Failed to fetch messages');
  }
};
