// 📦 prompt_generator/index.js
// TODO: index
// onUpdate UPDATE: Numerology: 6 (Balance, Harmony, Responsibility)
// Role: Integrator
// Prompt: “What can you stabilize today that was shifting yesterday?”

function generateDailyPrompt({ date, numerology, keywords, q1, q2 }) {
    return {
        date,
        numerology,
        keywords,
        prompts: [q1, q2]
    };
}

// 🕐 YESTERDAY – Numerology 4 
const yesterday = generateDailyPrompt({
    date: "04/09/2025",
    numerology: 4,
    keywords: ["Adapt", "Switch"],
    q1: "What's a pattern I've been repeating that no longer serves me?",
    q2: "What would breaking it today make possible?"
});

// 📍 TODAY – Numerology 5 (Balance, Harmony, Responsibility)
const today = generateDailyPrompt({
    date: "04/10/2025",
    numerology: 5,
    keywords: ["Synthesis", "Harmony", "Structure", "Responsibility"],
    q1: "What did I bring into alignment today that felt fractured before?",
    q2: "What system or structure did I strengthen by paying attention?"
});

// 🚀 TOMORROW – Numerology 6 (Reflection, Insight, Observation)
const tomorrow = generateDailyPrompt({
    date: "04/11/2025",
    numerology: 6,
    keywords: ["Insight", "Spirituality", "Analysis", "Inner Wisdom"],
    q1: "What silence did I finally listen to today?",
    q2: "What question am I not asking that could shift everything?"
});

module.exports = {
    generateDailyPrompt,
    yesterday,
    today,
    tomorrow
};
