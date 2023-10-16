function generateUniqueId() {
  const timestamp = Date.now().toString(36);
  const randomString = Math.random().toString(36).substr(2, 5); // Adjust the length as needed

  return timestamp + randomString;
}

export const uniqueId = generateUniqueId;
