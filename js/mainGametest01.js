/* https://stackoverflow.com/questions/18990441/innerhtml-br-breaking */

const gameData = {
    "1": {
        "topic" : "Browser issue",
        "text" : "A student has trouble accessing an ebook from their residential college. They get routed to the 404 error message. But you cannot replicate the problem. What would you suggest them to do first?",
        "image" : "smaller_images/1.png",
        "answer" : "",
"choices": {    
            "Reboot the laptop": [2,["Jalapeno","Bok Choy"]],
            "Clear cache and cookies": [2,["Broccoli", "Garlic", "Pumpkin"]],
            "Request ILL": [2,["Potato", "Leek", "Tomato"]],
            "Contact IT": [2, ["Green Bean", "Carrot"]]
        }
    },
    "2": {
        "text": "One of the first e-resource troubleshooting steps is to clear browser cache and cookies. If a user prefers not to clear their browser cache and cookies, they can use incognito or private mode as an alternative. Incognito or private mode does not store browsing history, cache, or cookies, so each session starts fresh. Visit <a href='https://ask.library.yale.edu/faq/174879' target='_blank'>here</a> for more information.",
        "image" : "smaller_images/2.png",
        "answer" : "Clear cache and cookies",
"choices": {
             "Continue": [3, []]
        }
    },
    "3": {
        "topic" : "Simultaneous user limit",
        "text": "A professor has difficulty accessing a French newspaper, Le Monde, though the Eureka.cc database. But you cannot replicate the problem. This database is known to be:",
        "image" : "smaller_images/3.png",
        "answer" : "",
"choices": {
            "Aggregator database": [4,["Garlic"]],
            "Limited to 3 simultaneous users": [4,["Green Bean", "Bok Choy", "Pumpkin"]],
            "Limited to valid NetID holders of Yale University and walk-in users": [4,["Leek", "Carrot"]],
            "All of the above": [4,[ "Broccoli", "Tomato"]]
        }
    },
    "4": {
        "text": "Eureka.cc is an aggregator database of Canadian and European newspapers and other publications. Access is limited to 3 users at a time. When the user tried to access the resource, the limit may have been reached, and there may have been no available sessions. The problem should be resolved once other users log off.",
        "image" : "smaller_images/3.png",
        "answer" : "All of the above",
"choices": {
            "Continue": [5,[]]
        }
    },
    "5": {
        "topic" : "Not starting the search from the library site",
        "text": "A graduate student reported that they could not read full-text of the current issue of the Harvard Business Review magazine at https://hbr.org/magazine.",
        "image" : "smaller_images/5.png",
        "answer" : "",
"choices": {
            "hbr.org is temporarily unavailable due to site upgrade": [6,["Garlic"]],
            "Yale’s access to the current issue is through EBSCOhost's Business Source Complete only": [6,["Green Bean", "Bok Choy", "Pumpkin"]],
            "Yale does not have access to Harvard Business Review at all": [6,["Leek", "Carrot"]]
        }
    },
    "6": {
        "text": "When users know their institution subscribes to a journal, they might visit the publisher’s website, such as hbr.org, instead of the library catalog or E-journal AZ list, leading to access issues and confusion. Most journal subscriptions are through aggregator platforms, not publishers. Using the library discovery services directs users to Yale's subscription platforms and provides essential details like access method, user limits, content coverage, and embargo periods. See a catalog record for Harvard Business Review",
        "image" : "smaller_images/5.png",
        "answer" : "Yale’s access to the current issue is through EBSCOhost's Business Source Complete only",
"choices": {
            "Continue": [7,[]]
        }
    },
    "7": {
        "topic" : "EZProxy",
        "text": "Which is the correct YUL EZProxy prefix?",
        "image" : "smaller_images/7.png",
        "answer" : "",
"choices": {
            "https://yale.ezproxy.org/login?url=": [8,["Garlic"]],
            "https://yale.oclc.org/login?url=": [8,["Green Bean", "Bok Choy", "Pumpkin"]],
            "https://yale.idm.oclc.org/login?url=": [8,["Leek", "Carrot"]],
            "https://search.library.yale.edu/login?url=": [8,["Carrot"]]
        }
    },
    "8": {
        "text": "The YUL EZProxy Prefix is https://yale.idm.oclc.org/login?url=. The prefix is used with a link to a resource that allows remote access through IP authentication. For example, Yale’s proxied link to JSTOR is https://yale.idm.oclc.org/login?url=https://www.jstor.org/search. Visit https://guides.library.yale.edu/ezproxy/atyul to learn more about EZProxy",
        "image" : "smaller_images/7.png",
        "answer" : "https://yale.idm.oclc.org/login?url=",
"choices": {
            "Continue": [9,[]]
        }
    },
    "9": {
        "topic" : "Major newspapers/magazines",
        "text": "To which websites/apps can current faculty, student, and staff sign up for a free digital subscription?",
        "image" : "smaller_images/9.png",
        "answer" : "",
"choices": {
            "Economist (www.economist.com)": [10,["Garlic"]],
            "Financial Times (www.ft.com)": [10,["Green Bean", "Bok Choy", "Pumpkin"]],
            "New York Times (www.nytimes.com)": [10,["Leek", "Carrot"]],
            "The Atlantic (www.theatlantic.com)": [10,["Carrot"]],
            "Wall street Journal (www.wsj.com)": [10,["Garlic"]],
            "Washington Post (www.washingtonpost.com)": [10,["Green Bean", "Bok Choy", "Pumpkin"]],
            "All of the above": [10,["Jalapeno","Bok Choy"]]
        }
    },
    "10": {
        "text": "Yale offers current faculty, staff, and students access to several major newspapers and magazines. Use your @yale.edu email address to set up an account. Please note that authorized users do not include affiliates of Yale New Haven Hospital. For more info, check the links below:",
        "image" : "smaller_images/9.png",
        "answer" : "All of the above",
"choices": {
            "Continue": [100,[]]
        }
    },
    "100": {
        "text": "Last question! After a night of good rest, the next morning you:",
        "image" : "smaller_images/another_day.png",
"choices" : {
            "Go to a cafe to finally read that book": [0,["Napa Cabbage", "Potato", "Carrot"]],
            "Head to work, get that bag": [0,["Tomato", "Leek"]],
            "Organize a community clean up day": [0,["Pumpkin", "Green Bean", "Garlic"]],
            "Go on a veggie run": [0, ["Jalapeno", "Bok Choy"]]
        } 
    }
};
const personalities = { 
    "Onion": 0,
    "Broccoli": 0,
    "Garlic": 0, // The Leader
    "Jalapeno": 0, // The Adventurer
    "Tomato": 0, // The Analyst
    "Green Bean": 0, // The Connector
    "Pumpkin": 0, // The Caregiver
    "Carrot": 0, // The Visionary
    "Potato": 0, // The Realist
    "Napa Cabbage": 0, // The Harmonizer
    "Bok Choy": 0, // The Performer
    "Leek": 0 // The Investigator
};

let currentState = 1;

function renderState(state) {
    const resultText = document.getElementById('result-text');
    const storyText = document.getElementById('story-text');
    const storyImage = document.getElementById('story-image');
    
    const choicesContainer = document.getElementById('choices');
    
    const answer = gameData[state].answer;
    let retrievedResponse = sessionStorage.getItem("response"); 
    console.log(retrievedResponse); 
    
    
    const img = new Image();
    img.src = gameData[state].image;

    img.onload = () => {
        storyImage.src = img.src;

        if (retrievedResponse === answer) {
            resultText.textContent = "Correct!";
            sessionStorage.clear();
        } else if (!answer) {
            resultText.innerHTML = "";
            sessionStorage.clear();
        } else {
            resultText.textContent = "Incorrect.";
            sessionStorage.clear();
        }
        
        storyText.innerHTML = gameData[state].text; /* storyText.textContent = gameData[state].text; */
        storyText.innerHTML = storyText.innerHTML.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
        
        choicesContainer.innerHTML = '';

        for (const [choice, info] of Object.entries(gameData[state].choices)) {
            const button = document.createElement('button');
            button.textContent = choice;
            button.className = 'choice-button';
            let nextState = info[0];
            button.onclick = () => {
                sessionStorage.setItem("response", choice);
                changeState(nextState, info[1]); /*each time you change state you update the personalities dictionary*/
            }                    
            choicesContainer.appendChild(button);
        }
    };
}


function changeState(newState, selectedPersonalities) { 
    // console.log(personalities); 
    selectedPersonalities.forEach(personality => {
        personalities[personality]++;
    });

    currentState = newState;

    if (currentState === 0) {
        revealMostSelectedVegetable();
    } else {
        renderState(currentState);
    }
}
function revealMostSelectedVegetable() {
    let maxCount = 0;
    let maxVeggie = '';

    for (const [vegetable, count] of Object.entries(personalities)) {
        if (count > maxCount) {
            maxCount = count;
            maxVeggie = vegetable;
        }
    }

    const storyImage = document.getElementById('story-image');
    const text = document.getElementById('story-text');
    const choicesContainer = document.getElementById('choices');
    const veggieImagePath = `smaller_images/id_cards/${maxVeggie}.png`;

    // Preload the image
    const img = new Image();
    img.src = veggieImagePath;
    img.className = 'responsive-image'; 

    // Create the share button
    const shareButton = document.createElement('button');
    shareButton.textContent = 'Share the game with Friends';
    shareButton.className = 'choice-button';

    // Once the image is loaded, update the DOM
    img.onload = () => {
        storyImage.style.display = 'none';
        choicesContainer.style.display = 'none';
    
        text.textContent = "Drumroll... here is your Veggie ID! Don't lose it! (Right click or hold the image to save)";
        text.appendChild(img);

        // Share button functionality
        shareButton.onclick = () => {
            const shareMessage = `Check out my Veggie ID! You can create yours at https://sophie006liu.github.io/vegetal/`;
            navigator.clipboard.writeText(shareMessage).then(() => {
                alert('Link copied to clipboard!');
            }).catch(err => {
                alert('Failed to copy link. Please try again.');
            });
        };

        text.appendChild(shareButton);
    };
}


function startGame() {
    document.querySelector('.title').style.display = 'none';
    document.getElementById('homescreen').style.display = 'none';
    document.querySelector('.start-button').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    renderState(currentState);
}

window.onload = () => {
    renderState(currentState);
}
