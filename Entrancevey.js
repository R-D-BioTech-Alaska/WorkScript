class Survey {
    constructor(questions) {
        this.questions = questions;
        this.scores = {
            biology: 0, chemistry: 0, physics: 0, earthScience: 0,
            dataScience: 0, materialsScience: 0, neurology: 0
        };
    }

    askQuestion(question) {
        const response = prompt(question.text + "\n" + this.formatOptions(question.options));
        const scoring = question.options[response];

        if (scoring) {
            Object.keys(scoring).forEach(key => {
                this.scores[key] += scoring[key];
            });
        } else {
            alert("Invalid option selected. Skipping to next question.");
        }
    }

    formatOptions(options) {
        return Object.keys(options).map(option => `${option} - Type '${option}'`).join("\n");
    }

    calculateResults() {
        const results = Object.entries(this.scores).sort((a, b) => b[1] - a[1]);
        return results[0][0];
    }

    start() {
        this.questions.forEach(question => this.askQuestion(question));
        const bestField = this.calculateResults();
        alert(`Based on your answers, we recommend focusing on: ${bestField}.`);
    }
}

const questions = [
    {
        text: "What aspect of science are you most interested in?",
        options: {
            "Living organisms": { biology: 5 },
            "Chemical substances": { chemistry: 5 },
            "Physical forces": { physics: 5 },
            "Earth systems": { earthScience: 5 },
            "Data analysis": { dataScience: 5 },
            "Material properties": { materialsScience: 5 },
            "Brain and nerves": { neurology: 5 }
        }
    },
    {
        text: "What kind of work environment do you prefer?",
        options: {
            "Lab research": { biology: 2, chemistry: 2, physics: 2 },
            "Outdoor fieldwork": { earthScience: 4 },
            "Computer-based analysis": { dataScience: 4 },
            "Clinical settings": { neurology: 3 },
            "Engineering workshops": { materialsScience: 3 }
        }
    },
    {
        text: "How do you handle complex data?",
        options: {
            "I enjoy crunching numbers": { dataScience: 5 },
            "I prefer conceptual analysis": { physics: 3, neurology: 2 },
            "I like hands-on experiments": { biology: 2, chemistry: 2 }
        }
    },
    {
        text: "Select the project you find most appealing:",
        options: {
            "Developing a vaccine": { biology: 4, chemistry: 1 },
            "Building a bridge": { physics: 3, materialsScience: 2 },
            "Studying climate change": { earthScience: 5 },
            "Creating a neural network model": { dataScience: 4 },
            "Researching Alzheimer's disease": { neurology: 4 }
        }
    },
    // Additional questions can be added here.
];

const survey = new Survey(questions);
survey.start();
