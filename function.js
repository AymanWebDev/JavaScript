function wellComeMessage(name, goodHandelar) {
  goodHandelar(name)

}

function goodMorning(tem) {
  console.log('Good Morning', tem);

}

function goodAfterNoon(Ayman) {
  console.log('Good After noon', Ayman);

}


wellComeMessage('Arafat', goodMorning)
wellComeMessage('Ayman', goodAfterNoon)