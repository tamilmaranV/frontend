function sendMessage() {
    let input = document.getElementById("user-input");
    let chatBox = document.getElementById("chat-box");
    let userText = input.value.trim();

    if (userText === "") return;

    let userMessage = document.createElement("p");
    userMessage.textContent = "You: " + userText;
    chatBox.appendChild(userMessage);

    let botResponse = document.createElement("p");
    botResponse.textContent = "Bot: Hello! How can I help you?";
    chatBox.appendChild(botResponse);

    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}
