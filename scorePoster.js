
// scorePoster.js
const renderAppUrl = 'https://checking-my2a.onrender.com'; // Replace with your Render app URL

const postScore = async (score) => {
  try {
    const response = await fetch(`${renderAppUrl}/scores`, {
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
