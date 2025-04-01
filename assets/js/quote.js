async function getQuote() {
    console.log("getQuote() function was called!"); // Debugging log

    const apiUrl = "https://api.quotable.io/random";

    try {
        const response = await axios.get(apiUrl);
        console.log("API Response:", response); // Debugging log
        const data = response.data;

        document.getElementById("quote").innerHTML = data.content;
        document.getElementById("author").innerHTML = data.author;
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}
