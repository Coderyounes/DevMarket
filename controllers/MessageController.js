const Message = require('../models/message');
const Proposal = require('../models/jobapplication');
// const Freelance = require('../models/freelance');

// Send Template Message
const sendTemplateMessage = async (req, res) => {
  const senderId = req.user.uid;
  const proposalId = req.params.id;
  const proposal = Proposal.findById({ _id: proposalId });
  const receiverId = proposal.freelancerid;

  const text = `Hello, this is a template message from ${senderId} to ${receiverId}.`;

  try {
    await Message.sendMessage(senderId, receiverId, text);
    return res.status(200).send('Template message sent successfully');
  } catch (error) {
    console.error('Error sending template message:', error);
    return res.status(500).send('Failed to send template message');
  }
};

const sendMessage = async (req, res) => {
  const senderId = req.user.uid;
  const { receiverId, text } = req.body;

  const chatId = Message.generateChatId(senderId, receiverId);
  await Message.getMessages(chatId);

  try {
    await Message.sendMessage(senderId, receiverId, text);
    return res.status(200).send('Message sent successfully');
  } catch (error) {
    console.error('Error sending message:', error);
    return res.status(500).send('Failed to send message');
  }
};

// Get Messages
const getMessages = async (req, res) => {
  const userId = req.user.uid;

  try {
    const messages = await Message.getMessages(userId);
    res.status(200).json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).send('Failed to fetch messages');
  }
};

module.exports = { sendMessage, getMessages, sendTemplateMessage };
