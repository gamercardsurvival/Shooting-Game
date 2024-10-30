
// scorePoster.js
const postScore = async (score) => {
  try {
    const response = await fetch('/scores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ score })
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

export { postScore };
