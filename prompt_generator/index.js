// prompt_generator/index.js

function generateDailyPrompt({ date, numerology, keywords, q1, q2 }) {
    return {
        date,
        numerology,
        keywords,
        prompts: [q1, q2]
    };
}

const yesterday = generateDailyPrompt({
    date: "04/01/2025",
    numerology: 5,
    keywords: ["Adapt"],
    q1: "What's a pattern I've been repeating that no longer serves me?",
    q2: "What would breaking it today make possible?"
});

const today = generateDailyPrompt({
    date: "04/02/2025",
    numerology: 6,
    keywords: ["Synthesis", "Harmony", "Structure", "Responsibility"],
    q1: "What did I bring into alignment today that felt fractured before?",
    q2: "What system or structure did I strengthen by paying attention?"
});

module.exports = {
    generateDailyPrompt,
    yesterday,
    today
};

