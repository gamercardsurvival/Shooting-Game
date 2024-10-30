
// scorePoster.js
const renderAppUrl = 'YOUR_RENDER_APP_URL'; // Replace with your Render app URL

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
