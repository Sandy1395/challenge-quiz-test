import React, { useCallback, useState } from 'react'
import { AnswerContainer, AnswertButton, format } from './common'

const Answers = React.memo(({ correct, incorrect, onAnswerSelect, disabled, currentAnswer }) => {
  const [answerArr, setAnswerArr] = useState([])

  const groupAnswers = useCallback(() => {
    if (correct && incorrect) {
      const answerArr = [...incorrect]
      const correctAnsPos = Math.floor(Math.random() * 3)
      answerArr.splice(correctAnsPos, 0, correct)
      return answerArr
    } else {
      return []
    }
  }, [correct, incorrect])

  const checkAnswer = (answer) => {
    if (answer === format(correct)) {
      onAnswerSelect({ result: true, text: 'Correct', answer })
    } else {
      onAnswerSelect({ result: false, text: 'Sorry!', answer })
    }
  }

  React.useEffect(() => {
    setAnswerArr(groupAnswers())
  }, [correct, incorrect, groupAnswers])

  return (
    <>
      <AnswerContainer>
        {answerArr.slice(0, 2).map((answer) =>
          <AnswertButton
            key={answer}
            disabled={disabled && currentAnswer !== format(answer)}
            onClick={() => checkAnswer(format(answer))}
          >{format(answer)}
          </AnswertButton>
        )}
      </AnswerContainer>
      <AnswerContainer>
        {answerArr.slice(2, 4).map((answer) =>
          <AnswertButton
            key={answer}
            disabled={disabled && currentAnswer !== format(answer)}
            onClick={() => checkAnswer(format(answer))}
          >{format(answer)}
          </AnswertButton>
        )}
      </AnswerContainer>
    </>
  )
}, (pp, np) => np === pp)

export default Answers
