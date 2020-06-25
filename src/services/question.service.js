
export const getQuestions = () => {
  // eslint-disable-next-line no-undef
  return fetch('https://raw.githubusercontent.com/outlier-org/challenge-quiz/master/src/questions.json')
}
