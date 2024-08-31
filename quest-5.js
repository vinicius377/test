function guessLightRoom(lightRooms, light) {
  let attempts = 0;
  let switchResult = "Não existe switch para essa luz";

  const onTrySwitch = () => {
    const attemptSwitch = lightRooms[attempts];

    if (attemptSwitch.light === light) {
      switchResult = attemptSwitch.switch;
      return;
    }

    if (lightRooms.length - 2 === attempts) {
      switchResult = lightRooms[lightRooms.length - 1].switch;
      return
    }

    attempts++;
    onTrySwitch();
  };

  onTrySwitch()

  console.log(`O interruptor para a luz ${light} é: ${switchResult}`)
  console.log(`Tentativas: ${attempts + 1}`)
}

const lightRooms = [
  { light: 1, switch: "A" },
  { light: 2, switch: "B" },
  { light: 3, switch: "C" },
];

guessLightRoom(lightRooms, 3);
