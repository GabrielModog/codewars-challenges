function humanReadable(seconds) {
  const SS = Math.floor(seconds % 60);
  const MM = Math.floor((seconds / 60) % 60);
  const HH = Math.floor(seconds / (60 * 60));

  const format = (value) => {
    const values = value.toString().split("");
    const isBiggerThanOne = values.length > 1;

    return isBiggerThanOne
      ? value
      : values.join("").padStart(values.length + 1, "0");
  };

  const hour = format(HH);
  const minute = format(MM);
  const second = format(SS);

  return `${hour}:${minute}:${second}`;
}

module.exports = humanReadable;
