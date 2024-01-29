document.getElementById('startButton').addEventListener('click', function() {
  document.getElementById('startButton').style.display = 'none'
  document.getElementById('message').innerHTML = 'Do you remember when we started talking?'
  var buttonsContainer = document.createElement('p')
  var yesButton = createButton('Yes')
  var noButton = createButton('No')
  buttonsContainer.appendChild(yesButton)
  buttonsContainer.appendChild(noButton)
  document.getElementById('message').appendChild(buttonsContainer)
  //confetti()

  yesButton.addEventListener('click', function() {
    document.getElementById('message').innerHTML = 'Yayy!❤❤I\'m so happyy😘😘'
    confetti()
    setTimeout(function() {
      showProposal()
    }, 5000)
  })

  noButton.addEventListener('click', function() {
    document.getElementById('message').innerHTML = 'No worries love🫂😇.It was 24th March 2022'
    //confetti()
    document.getElementById('anim4').style.display = 'block';
    setTimeout(function() {
      showProposal()
    }, 5000)
  })
})

function createButton(text) {
  var button = document.createElement('button')
  button.textContent = text
  return button
}

function confetti() {
  var confettiContainer = document.getElementById('confetti');
  confettiContainer.style.display = 'block';
  document.getElementById('anim1').style.display = 'block';
  setTimeout(function() {
    //confettiContainer.style.display = 'none';
    document.getElementById('anim1').style.display = 'none';
  }, 5000);
}

function showFinalText() {
  document.getElementById('message').innerHTML = 'SEE YOU SOON!!😘❤'
}

function showProposal() {
  document.getElementById('message').innerHTML = 'So since we\'ve been talking for 1 year, 10 months, 5 days... Will you be my valentine?'
  var pleaseText = document.createElement('span')
  document.getElementById('message').appendChild(pleaseText)
  var buttonsContainer = document.createElement('p')
  var yesButton = createButton('Yes, of course')
  var noButton = createButton('No')
  buttonsContainer.appendChild(yesButton)
  buttonsContainer.appendChild(noButton)
  document.getElementById('message').appendChild(buttonsContainer)
  document.getElementById('confetti').style.display = 'none'
  //document.getElementById('anim2').style.display = 'block';
  //confetti()
  //petals()
  
  yesButton.addEventListener('click', function() {
    document.getElementById('message').innerHTML = 'Thanks my love!❤❤😘 I love you.😘';
    document.getElementById('anim2').style.display = 'block';
    document.getElementById('anim4').style.display = 'none';
    //document.getElementById('anim3').style.display = 'block';
    petals();
    setTimeout(function() {
      document.getElementById('container').style.display = 'none';
      showFinalText()
    }, 10000);
    //...
});

  //showFinalText()

  noButton.addEventListener('click', function() {
    document.getElementById('message').innerHTML = 'Pleaseeeee🥺👉🏼👈🏼'
    document.getElementById('anim3').style.display = 'block';
    var buttonsContainer = document.createElement('p')
    var yesButton = createButton('Okayy babyy')
    var noButton = createButton('No')
    buttonsContainer.appendChild(yesButton)
    buttonsContainer.appendChild(noButton)
    document.getElementById('message').appendChild(buttonsContainer)
    document.getElementById('confetti').style.display = 'none'
    //petals()

    yesButton.addEventListener('click', function() {
      document.getElementById('message').innerHTML = 'Thanks my love!❤❤😘 I love you.😘'
      document.getElementById('anim2').style.display = 'block';
      document.getElementById('anim3').style.display = 'none';
      document.getElementById('anim4').style.display = 'none';
      petals()
      setTimeout(function() {
        document.getElementById('container').style.display = 'none'
        
      }, 10000) 
      //showFinalText()
    })
  })
}

function petals() {
  var petalsBox = document.getElementById('petals')
  petalsBox.style.display = 'block';
  setTimeout(function() {
    confettiContainer.style.display = 'none';
  }, 5000);
}