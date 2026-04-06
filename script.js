let currentMood = "";

function showScreen(id) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

function addMessage(text, sender) {
    let chatBox = document.getElementById("chatBox");

    let msg = document.createElement("div");
    msg.classList.add("message", sender);
    msg.innerText = text;

    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// 🎭 Mood Selection
function selectMood(mood) {
    currentMood = mood;
    showScreen("chatScreen");

    let question = "";

    if (mood === "happy") {
        question = "That's great 😊 What made you happy today?";
    } 
    else if (mood === "sad") {
        question = "I'm here for you 💙 What’s bothering you?";
    } 
    else if (mood === "stress") {
        question = "Feeling stressed 😣 What’s causing it?";
    } 
    else if (mood === "angry") {
        question = "Take a breath 😡 What made you upset?";
    } 
    else {
        question = "You seem calm 😌 What’s on your mind?";
    }

    addMessage(question, "ai");
}

// 💬 Send Message
function sendMessage() {
    let input = document.getElementById("userInput");
    let text = input.value;

    if (text.trim() === "") return;

    addMessage(text, "user");
    input.value = "";

    setTimeout(() => {
        respondAI(text);
    }, 800);
}

// 🤖 SMART AI RESPONSE
function respondAI(text) {
    text = text.toLowerCase();
    let response = "";

    if (text.includes("sad") || text.includes("cry") || text.includes("hurt")) {
        response = "I'm really sorry you're feeling this way 💙 Want to share more?";
    } 
    else if (text.includes("angry") || text.includes("frustrated")) {
        response = "I understand 😡 Try taking a deep breath... I'm here.";
    } 
    else if (text.includes("stress") || text.includes("tired") || text.includes("pressure")) {
        response = "That sounds overwhelming 😣 Take a short pause, you deserve it.";
    } 
    else if (text.includes("happy") || text.includes("good") || text.includes("great")) {
        response = "That’s amazing 😊 What made it special?";
    } 
    else if (text.includes("love") || text.includes("miss")) {
        response = "That’s really deep ❤️ Emotions make us human.";
    } 
    else {
        let replies = [
            "Tell me more about that 🌿",
            "I'm listening 👀",
            "How does that make you feel?",
            "That’s interesting… go on ✨",
            "I understand 💭"
        ];

        response = replies[Math.floor(Math.random() * replies.length)];
    }

    addMessage(response, "ai");
}