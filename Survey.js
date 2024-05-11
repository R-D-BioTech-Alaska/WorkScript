class Survey {
    constructor(questions, containerId) {
        this.questions = questions;
        this.container = document.getElementById(containerId);
        this.scores = {
            biology: 0,
            chemistry: 0,
            physics: 0,
            earthScience: 0,
            dataScience: 0,
            materialsScience: 0,
            neurology: 0,
            psychology: 0
        };
        this.initSurvey();
    }

    initSurvey() {
        this.questions.forEach((question, index) => {
            const fieldset = document.createElement('fieldset');
            const legend = document.createElement('legend');
            legend.textContent = question.text;
            fieldset.appendChild(legend);

            question.options.forEach(option => {
                const label = document.createElement('label');
                const input = document.createElement('input');
                input.type = 'radio';
                input.name = `question${index}`;
                input.value = option.text;
                label.appendChild(input);
                label.append(` ${option.text}`);
                fieldset.appendChild(label);

                input.addEventListener('change', () => {
                    Object.keys(option.score).forEach(key => {
                        this.scores[key] += option.score[key];
                    });
                });
            });

            this.container.appendChild(fieldset);
        });
    }

    calculateResults() {
        const sortedScores = Object.entries(this.scores).sort((a, b) => b[1] - a[1]);
        const topField = sortedScores[0];
        alert(`Based on your answers, your suggested area of focus should be: ${topField[0]} with a score of ${topField[1]}`);
    }
}

function submitSurvey(event) {
    event.preventDefault();
    survey.calculateResults();
}

const questions = [
    {
        text: "What motivates you more: discovering a new species or inventing a new technology?",
        options: [
            { text: "Discovering a new species", score: { biology: 3 } },
            { text: "Inventing a new technology", score: { materialsScience: 3, physics: 2 } }
        ]
    },
    {
        text: "Which would you rather study: animal behavior or the properties of different chemicals?",
        options: [
            { text: "Animal behavior", score: { biology: 3, psychology: 1 } },
            { text: "Properties of chemicals", score: { chemistry: 3 } }
        ]
    },
    {
        text: "Would you prefer to work in a laboratory or in the field observing natural phenomena?",
        options: [
            { text: "In a laboratory", score: { chemistry: 2, physics: 2 } },
            { text: "In the field", score: { biology: 2, earthScience: 2 } }
        ]
    },
    {
        text: "Are you more interested in studying the human brain or celestial bodies?",
        options: [
            { text: "The human brain", score: { neurology: 3, psychology: 2 } },
            { text: "Celestial bodies", score: { physics: 3 } }
        ]
    },
    {
        text: "Do you get more excited about solving complex equations or conducting experiments?",
        options: [
            { text: "Solving complex equations", score: { physics: 2, dataScience: 2 } },
            { text: "Conducting experiments", score: { chemistry: 2, biology: 2 } }
        ]
    },
    {
        text: "What appeals to you more: improving human health or protecting the environment?",
        options: [
            { text: "Improving human health", score: { biology: 2, neurology: 1 } },
            { text: "Protecting the environment", score: { earthScience: 3, biology: 1 } }
        ]
    },
    {
        text: "Which is more fascinating: the way machines work or how energy flows in nature?",
        options: [
            { text: "How machines work", score: { physics: 3, materialsScience: 2 } },
            { text: "How energy flows in nature", score: { earthScience: 3, biology: 1 } }
        ]
    },
    {
        text: "Choose an activity you prefer: Analyzing rock formations or studying the solar system.",
        options: [
            { text: "Analyzing rock formations", score: { earthScience: 3 } },
            { text: "Studying the solar system", score: { physics: 3 } }
        ]
    },
    {
        text: "What would you rather do: Develop new medical treatments or create sustainable energy solutions?",
        options: [
            { text: "Develop new medical treatments", score: { biology: 3, chemistry: 2 } },
            { text: "Create sustainable energy solutions", score: { physics: 2, earthScience: 2 } }
        ]
    },
    {
        text: "Would you enjoy more: Mapping the human genome or designing a quantum computer?",
        options: [
            { text: "Mapping the human genome", score: { biology: 3, dataScience: 2 } },
            { text: "Designing a quantum computer", score: { physics: 3, dataScience: 2 } }
        ]
    },
    {
        text: "What interests you more: Learning about the chemical basis of life or understanding the laws of motion?",
        options: [
            { text: "Chemical basis of life", score: { chemistry: 3, biology: 2 } },
            { text: "Laws of motion", score: { physics: 3 } }
        ]
    },
    {
        text: "If you could, would you rather invent a new pharmaceutical drug or a new type of biodegradable material?",
        options: [
            { text: "A new pharmaceutical drug", score: { chemistry: 3, biology: 2 } },
            { text: "A new type of biodegradable material", score: { materialsScience: 3, chemistry: 1 } }
        ]
    },
    {
        text: "Which area would you prefer to contribute to: Genetic engineering or artificial intelligence?",
        options: [
            { text: "Genetic engineering", score: { biology: 3, dataScience: 1 } },
            { text: "Artificial intelligence", score: { dataScience: 3, physics: 1 } }
        ]
    },
    {
        text: "Do you prefer: Researching new ways to recycle waste or developing apps to track wildlife migration?",
        options: [
            { text: "Researching new ways to recycle waste", score: { earthScience: 3, chemistry: 1 } },
            { text: "Developing apps to track wildlife", score: { biology: 2, dataScience: 2 } }
        ]
    },
    {
        text: "What captures your interest more: The complexity of ecosystems or the intricacies of molecular structures?",
        options: [
            { text: "Complexity of ecosystems", score: { biology: 3, earthScience: 1 } },
            { text: "Intricacies of molecular structures", score: { chemistry: 3 } }
        ]
    },
    {
        text: "Which would you choose to study: How medications affect the brain or how computers can simulate human thinking?",
        options: [
            { text: "How medications affect the brain", score: { neurology: 3, biology: 2 } },
            { text: "How computers simulate human thinking", score: { dataScience: 3, psychology: 2 } }
        ]
    },
    {
        text: "Would you rather work on: The development of renewable energy sources or the cure for a disease?",
        options: [
            { text: "Renewable energy sources", score: { physics: 3, earthScience: 1 } },
            { text: "Cure for a disease", score: { biology: 3, chemistry: 2 } }
        ]
    },
    {
        text: "Choose your preferred task: Creating models to predict climate change or conducting clinical trials for new drugs.",
        options: [
            { text: "Predicting climate change", score: { earthScience: 3, dataScience: 1 } },
            { text: "Conducting clinical trials", score: { biology: 3, psychology: 1 } }
        ]
    },
    {
        text: "What is more appealing to you: Exploring the universe or exploring the human mind?",
        options: [
            { text: "Exploring the universe", score: { physics: 3 } },
            { text: "Exploring the human mind", score: { psychology: 3, neurology: 1 } }
        ]
    },
    {
        text: "Would you prefer to design drugs to improve health or sensors to monitor environmental changes?",
        options: [
            { text: "Design drugs to improve health", score: { chemistry: 3, biology: 2 } },
            { text: "Design sensors for the environment", score: { earthScience: 2, physics: 2 } }
        ]
    },
    {
        text: "What do you find more interesting: The science of building strong materials or the science of healthy living?",
        options: [
            { text: "Building strong materials", score: { materialsScience: 3, physics: 1 } },
            { text: "Science of healthy living", score: { biology: 3, chemistry: 1 } }
        ]
    },
    {
        text: "Would you rather improve solar panel efficiency or create more effective vaccines?",
        options: [
            { text: "Improve solar panel efficiency", score: { physics: 3, materialsScience: 2 } },
            { text: "Create more effective vaccines", score: { biology: 3, chemistry: 2 } }
        ]
    },
    {
        text: "Do you find it more critical to address the problems with artificial limbs or with drug-resistant bacteria?",
        options: [
            { text: "Artificial limbs", score: { materialsScience: 3, biology: 1 } },
            { text: "Drug-resistant bacteria", score: { biology: 3, chemistry: 2 } }
        ]
    },
    {
        text: "Which research would you prioritize: Studying ocean acidification or discovering new elements?",
        options: [
            { text: "Studying ocean acidification", score: { earthScience: 3, chemistry: 1 } },
            { text: "Discovering new elements", score: { chemistry: 3, physics: 1 } }
        ]
    },
    {
        text: "Would you enjoy more: Developing a new psychiatric treatment or a new algorithm for predicting weather patterns?",
        options: [
            { text: "New psychiatric treatment", score: { neurology: 3, psychology: 2 } },
            { text: "New algorithm for weather patterns", score: { dataScience: 3, earthScience: 2 } }
        ]
    },
    {
        text: "What would you rather develop: A machine learning model to diagnose diseases or a chemical process to clean oceans?",
        options: [
            { text: "Machine learning model for diseases", score: { dataScience: 3, biology: 2 } },
            { text: "Chemical process to clean oceans", score: { chemistry: 3, earthScience: 2 } }
        ]
    },
    {
        text: "Which is more significant: Advancing quantum computing or enhancing neuroimaging techniques?",
        options: [
            { text: "Advancing quantum computing", score: { physics: 3, dataScience: 2 } },
            { text: "Enhancing neuroimaging techniques", score: { neurology: 3, physics: 1 } }
        ]
    },
    {
        text: "Do you see yourself more as a person who would engineer bio-compatible materials or study the impact of viruses on human health?",
        options: [
            { text: "Engineer bio-compatible materials", score: { materialsScience: 3, chemistry: 2 } },
            { text: "Study virus impact on health", score: { biology: 3, neurology: 1 } }
        ]
    },
    {
        text: "Would you rather investigate the geological impacts of earthquakes or develop new pesticides?",
        options: [
            { text: "Investigate earthquakes", score: { earthScience: 3, physics: 1 } },
            { text: "Develop new pesticides", score: { chemistry: 3, biology: 1 } }
        ]
    },
    {
        text: "What interests you more: Creating software to analyze astronomical data or to track migration patterns?",
        options: [
            { text: "Analyze astronomical data", score: { physics: 3, dataScience: 2 } },
            { text: "Track migration patterns", score: { biology: 2, dataScience: 2 } }
        ]
    },
    {
        text: "Do you prefer: Understanding how drugs interact with the human body or how plants can be genetically modified to resist pests?",
        options: [
            { text: "Drugs interact with the human body", score: { biology: 2, chemistry: 3 } },
            { text: "Genetically modify plants", score: { biology: 3, chemistry: 1 } }
        ]
    },
    {
        text: "Would you rather develop new surgical techniques or explore sustainable farming practices?",
        options: [
            { text: "Develop surgical techniques", score: { biology: 3, neurology: 2 } },
            { text: "Explore sustainable farming", score: { earthScience: 3, biology: 1 } }
        ]
    },
    {
        text: "Which challenge appeals to you more: Solving the problem of plastic pollution or finding cures for genetic diseases?",
        options: [
            { text: "Solving plastic pollution", score: { chemistry: 3, earthScience: 2 } },
            { text: "Finding cures for genetic diseases", score: { biology: 3, dataScience: 1 } }
        ]
    }
];

const survey = new Survey(questions, 'surveyContainer');
