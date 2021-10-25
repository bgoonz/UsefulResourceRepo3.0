// Set HTML Entry Point
const entryPoint = document.querySelector("div.cards");

// Get User Data from GitHub
const getGitHubUserData = async (username) => {
  try {
	// Get Request
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
	// Return data if successfull
	const data = response.data;
    console.log(data);
	return data;
  } catch (error) {
	// Return Error if data cannot be pulled
    console.log("Error fetching user data!");
  } finally {
	// Always inform dev if function is run
    console.log("getGitHubUserData() was run!");
  }
};

// Create and append the card to the document
const myUserData = getGitHubUserData("WaywardPooch");
entryPoint.appendChild(makeUserCard(myUserData));