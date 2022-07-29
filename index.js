const questions = [
    {
        question: "You are planning a night out, which do you choose?",
        optionA: "Going out to a bar or club scene with a group of friends and whoever else wants to join.",
        aTotal: "3",
        optionB: "Cuddling up at home with a nice book while you listen to the rain fall.",
        bTotal: "0",
        optionC: "Ordering takeout with your best friend and watching a movie together.",
        cTotal: "1",
        optionD: "Calling up a group of friends to go bowling or laser tag.",
        dTotal: "2"
    },
    {
        question: "Do you prefer to understand the past or look onward to the future?",
        optionA: "Past",
        aTotal: "3",
        optionB: "A bit of both, but mostly past and present.",
        bTotal: "2",
        optionC: "A bit of both, but mostly future.",
        cTotal: "1",
        optionD: "Future.",
        dTotal: "0"
    },
    {
        question: "Do you agree with the quote that “the ends can justify the means”?",
        optionA: "Yes.",
        aTotal: "0",
        optionB: "Depends on the situation.",
        bTotal: "1",
        optionC: "Hmm probably not.",
        cTotal: "2",
        optionD: "Absolutely not.",
        dTotal: "3"
    },
    {
        question: "Do you prefer to have plans set-in-stone or looser for a trip?",
        optionA: "Spontaneous! I thrive this way.",
        aTotal: "3",
        optionB: "A bit of but still quite a bit of flexibility.",
        bTotal: "2",
        optionC: "I like to have a layout of what we are doing.",
        cTotal: "1",
        optionD: "I like to plan ahead so I do not have to worry about it the day of.",
        dTotal: "0",
    },
    {
        question: "After attending a large gathering, what to do you?",
        optionA: "Very excited and start scheduling more events like this to go to.",
        aTotal: "3",
        optionB: "Thinking about other friends you have not hung out with in a while and see what they are up to.",
        bTotal: "2",
        optionC: "Need a day or two to decompress and rest alone.",
        cTotal: "1",
        optionD: "Take a nap then work on one of my favorite hobbies.",
        dTotal: "0"
    },
    {
        question: "You have a project due. How do you approach the problem?",
        optionA: "The way I was taught how to: I know it will work.",
        aTotal: "3",
        optionB: "Try it the way I was taught and possibly find an easier way along the way.",
        bTotal: "2",
        optionC: "Trying a new idea a couple times but if it fails, go back to the way I was taught.",
        cTotal: "1",
        optionD: "Experimenting with a new way to solve the issue even if it takes several tries.",
        dTotal: "0"
    },
    {
        question: "You are in a dispute about a controversial topic with someone. How do you approach?",
        optionA: "Using the logic and data found for the subject.",
        aTotal: "0",
        optionB: "Using mostly logic but a bit of my personal feelings.",
        bTotal: "1",
        optionC: "Trying to understand why they feel that way and their emotions.",
        cTotal: "2",
        optionD: "Mostly emotions and understanding their side, but also including some facts to further back my point.",
        dTotal: "3"
    },
    {
        question: "I like to look at the menu before going out to a restaurant.",
        optionA: "Definitely.",
        aTotal: "0",
        optionB: "Most of the time",
        bTotal: "1",
        optionC: "Sometimes.",
        cTotal: "2",
        optionD: "Not really.",
        dTotal: "3"
    },
    {
        question: "Which statement described you best?",
        optionA: "I often multi-task and do not mind doing so.",
        aTotal: "3",
        optionB: "I usually try to multi-task even though it does not always go well.",
        bTotal: "2",
        optionC: "I prefer to focus on one task at a time rather than jump from one to another.",
        cTotal: "1",
        optionD: "I usually work on one task until I get stuck then I move to focus on another.",
        dTotal: "0"
    },
    {
        question: "Regarding books or movies, are you more fascinated with documentaries/realistic topics or fantasy/fiction ones?",
        optionA: "Documentaries, realistic, nonfiction, etc.",
        aTotal: "3",
        optionB: "A mix of both, but mostly nonfiction.",
        bTotal: "2",
        optionC: "A mix of both, but mostly fiction.",
        cTotal: "1",
        optionD: "Fantasy, Sci-Fi, fiction, etc.",
        dTotal: "0"
    },
    {
        question: "Which characteristics do you think are more important in a leader?",
        optionA: "Compassion.",
        aTotal: "3",
        optionB: "Empathy.",
        bTotal: "2",
        optionC: "Common sense.",
        cTotal: "1",
        optionD: "Logic-based.",
        dTotal: "0"
    },
    {
        question: "Are things in your room/apartment/house usually tidy?",
        optionA: "There are items everywhere, but I still know where the majority of things are.",
        aTotal: "3",
        optionB: "Some areas like my bed are tidy while my desk is a mess.",
        bTotal: "2",
        optionC: "I usually keep things pretty tidy and clean.",
        cTotal: "1",
        optionD: "Everything must stay organized and I usually help others organize too.",
        dTotal: "0"
    }
  ]


  let currentQuestion = 0;
  let score = [];
  let selectedAnswersData = [];
  const totalQuestions =questions.length;

  const container = document.querySelector('.quiz-container');
  const questionEl = document.querySelector('.question');
  const option1 = document.querySelector('.option1');
  const option2 = document.querySelector('.option2');
  const option3 = document.querySelector('.option3');
  const option4 = document.querySelector('.option4');
  const nextButton = document.querySelector('.next');
  const restartButton = document.querySelector('.restart');
  const result = document.querySelector('.result');

  //Function to generate question
  function generateQuestions (index) {
      //Select each question by passing it a particular index
      const question = questions[index];
      const option1Total = questions[index].aTotal;
      const option2Total = questions[index].bTotal;
      const option3Total = questions[index].cTotal;
      const option4Total = questions[index].dTotal;
      //Populate html elements
      questionEl.innerHTML = `${index + 1}. ${question.question}`
      option1.setAttribute('data-total', `${option1Total}`);
      option2.setAttribute('data-total', `${option2Total}`);
      option3.setAttribute('data-total', `${option3Total}`);
      option4.setAttribute('data-total', `${option4Total}`);
      option1.innerHTML = `${question.optionA}`
      option2.innerHTML = `${question.optionB}`
      option3.innerHTML = `${question.optionC}`
      option4.innerHTML = `${question.optionD}`
  }

  function displayResult() {
    let result = null // who they got
    let description = null // similarities between them and their person
    let person = null // an image of their person

    // if player gets ESFP
    if (score >= 33) {
        result = "You got... Ron Weasley!"
    }
    // if player gets ESFJ
    else if (score == 31 || score == 32) {
        result = "You got... Draco Malfoy!"
    }
    // if player gets ESTP
    else if (score == 29 || score == 30) {
        result = "You got... Ginny Weasley!"
    }
    // if player gets ENFP
    else if (score == 27 || score == 28) {
        result = "You got... Dudley Dursley!"
    }
    // if player gets ISFP
    else if (score == 25 || score == 26) {
        result = "You got... Harry Potter!"
    }
    // if player gets ESTJ
    else if (score == 23 || score == 24) {
        result = "You got... Hermione Granger!"
    }
    // if player gets ENTP
    else if (score == 21 || score == 22) {
        result = "You got... Fred and George Weasley!"
    }
    // if player gets ENFJ
    else if (score == 19 || score == 20) {
        result = "You got... Sirius Black!"
    }
    // if player gets INFP
    else if (score == 17 || score == 18) {
        result = "You got... Luna Lovegood!"
    }
    // if player gets ISTP
    else if (score == 15 || score == 16) {
        result = "You got... Hargid!"
    }
    // if player gets ISFJ
    else if (score == 13 || score == 14) {
        result = "You got... Neville Longbottom!"
    }
    // if player gets ENTJ
    else if (score == 11 || score == 12) {
        result = "You got... Tom Riddle (aka Voldemort)!"
    }
    // if player gets ISTJ
    else if (score == 9 || score == 10) {
        result = "You got... Dolores Umbridge!"
    }
    // if player gets INFJ
    else if (score == 7 || score == 8) {
        result = "You got... Albus Dumbledore!"
    }
    // if player gets INTP
    else if (score == 5 || score == 6) {
        result = "You got... Dobby!"
    }
    // if player gets INTJ
    else {
        result = "You got... Severus Snape!"
    }

    document.getElementById("result").innerHTML = result
    document.getElementById("description").innerHTML = description
}

  function loadNextQuestion () {
      const selectedOption = document.querySelector('input[type="radio"]:checked');
      //Check if there is a radio input checked
      if(!selectedOption) {
          alert('Please select your answer!');
          return;
      }
      //Get value of selected radio
      const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));

      ////Add the answer score to the score array
      score.push(answerScore);

      selectedAnswersData.push()


      const totalScore = score.reduce((total, currentNum) => total + currentNum);

      //Finally we incement the current question number ( to be used as the index for each array)
      currentQuestion++;

          //once finished clear checked
          selectedOption.checked = false;
      //If quiz is on the final question
      if(currentQuestion == totalQuestions - 1) {
          nextButton.textContent = 'Finish';
      }

    //If the quiz is finished then we hide the questions container and show the results
    if(currentQuestion == totalQuestions) {
        container.style.display = 'none';
        console.log(document.getElementsByClassName('result').textContent);
    }
    generateQuestions(currentQuestion);
}



// display answer
/*function displayResult() {
    let result = null // who they got
    let description = null // similarities between them and their person
    let person = null // an image of their person

    // if player gets ESFP
    if (playerScore >= 33) {
        result = "You got... Ron Weasley!"
    }
    // if player gets ESFJ
    else if (playerScore == 31 OR playerScore == 32) {
        result = "You got... Draco Malfoy!"
    }
    // if player gets ESTP
    else if (playerScore == 29 OR playerScore == 30) {
        result = "You got... Ginny Weasley!"
    }
    // if player gets ENFP
    else if (playerScore == 27 OR playerScore == 28) {
        result = "You got... Dudley Dursley!"
    }
    // if player gets ISFP
    else if (playerScore == 25 OR playerScore == 26) {
        result = "You got... Harry Potter!"
    }
    // if player gets ESTJ
    else if (playerScore == 23 OR playerScore == 24) {
        result = "You got... Hermione Granger!"
    }
    // if player gets ENTP
    else if (playerScore == 21 OR playerScore == 22) {
        result = "You got... Fred and George Weasley!"
    }
    // if player gets ENFJ
    else if (playerScore == 19 OR playerScore == 20) {
        result = "You got... Sirius Black!"
    }
    // if player gets INFP
    else if (playerScore == 17 OR playerScore == 18) {
        result = "You got... Luna Lovegood!"
    }
    // if player gets ISTP
    else if (playerScore == 15 OR playerScore == 16) {
        result = "You got... Hargid!"
    }
    // if player gets ISFJ
    else if (playerScore == 13 OR playerScore == 14) {
        result = "You got... Neville Longbottom!"
    }
    // if player gets ENTJ
    else if (playerScore == 11 OR playerScore == 12) {
        result = "You got... Tom Riddle (aka Voldemort)!"
    }
    // if player gets ISTJ
    else if (playerScore == 9 OR playerScore == 10) {
        result = "You got... Dolores Umbridge!"
    }
    // if player gets INFJ
    else if (playerScore == 7 OR playerScore == 8) {
        result = "You got... Albus Dumbledore!"
    }
    // if player gets INTP
    else if (playerScore == 5 OR playerScore == 6) {
        result = "You got... Dobby!"
    }
    // if player gets INTJ
    else {
        result = "You got... Severus Snape!"
    }

    document.getElementById('result').innerHTML = result
    document.getElementById('description').innerHTML = description
}*/

generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
