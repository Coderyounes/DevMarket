const { admin, db } = require('../config/firebase-admin-config');

// Generate a unique chat ID based on participants
const generateChatId = (senderId, receiverId) => [senderId, receiverId].sort().join('_');

// Send Message
exports.sendMessage = async (senderId, receiverId, text) => {
  const chatId = generateChatId(senderId, receiverId);

  try {
    await db.collection('messages').add({
      chatId,
      senderId,
      receiverId,
      text,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });
    console.log('Message sent successfully');
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};

// Get Messages
exports.getMessages = async (userId) => {
  try {
    const messagesSnapshot = await db.collection('messages')
      .orderBy('createdAt')
      .get();

    const messages = messagesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })).filter((message) => message.chatId.includes(userId));

    return messages;
  } catch (error) {
    console.error('Error fetching messages:', error);
    throw error;
  }
};
