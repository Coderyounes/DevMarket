const { admin, db } = require('../config/firebase-admin-config');

// Send Message
exports.sendMessage = async (chatId, senderId, text) => {
  try {
    await db.collection('messages').add({
      chatId,
      senderId,
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
exports.getMessages = async (chatId) => {
  try {
    const messagesSnapshot = await db.collection('messages')
      .where('chatId', '==', chatId)
      .orderBy('createdAt')
      .get();

    const messages = messagesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return messages;
  } catch (error) {
    console.error('Error fetching messages:', error);
    throw error;
  }
};
