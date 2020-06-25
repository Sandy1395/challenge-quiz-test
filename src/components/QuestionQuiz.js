import React, { useState } from 'react'
import _countBy from 'lodash/countBy'
import {
  Container, FooterContainer, FooterStatstics,
  format, Loading,
  NextQuestionButton, ProgressBar, ProgressBarCommon,
  ProgressBarFill,
  QuestionCategory,
  QuestionStat,
  QuestionTitle, ResultContainer
} from './common'
import { getQuestions } from '../services/question.service'
import QuestionDifficulty from './QuestionDifficulty'
import Answers from './Answers'

const QuestionQuiz = () => {
  const [loading, setLoading] = useState(false)
  const [question, setQuestions] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState({})
  const [results, setResult] = useState([])
  const [isFinished, setFinished] = useState(false)
  const [currentResult, setCurrentResult] = useState({})

  React.useEffect(() => {
    setLoading(true)
    getQuestions()
      .then(response => response.json())
      .then(data => {
        setQuestions(data)
        setCurrentQuestion(data[0])
        setLoading(false)
      })
  }, [])

  const onAnswerSelect = (answer) => {
    setCurrentResult(answer)
  }

  const onNextQuestion = () => {
    setCurrentResult({})
    if (results.length + 1 < question.length) {
      setResult([...results, currentResult])
      setCurrentQuestion(question[results.length + 1])
    }
  }

  const onFinished = () => {
    setResult([...results, currentResult])
    setCurrentResult({})
    setFinished(true)
  }

  const getCurrentScore = () => {
    const answer = _countBy(results, r => r.result)
    return Math.round((answer.true / results.length) * 100 || 0)
  }

  const getMaxScore = () => {
    const answer = _countBy(results, r => r.result)
    const remainingQuestion = question.length - results.length
    return Math.round((((answer.true || 0) + remainingQuestion) / question.length) * 100)
  }

  const getLowestPossibleScore = () => {
    const answer = _countBy(results, r => r.result)
    return Math.round(((answer.true || 0) / question.length) * 100)
  }

  const getWidth = () => (results.length / question.length) * 100 || 0
  const currentScore = getCurrentScore()
  const maxScore = getMaxScore()
  const lowestPossibleScore = getLowestPossibleScore()

  const renderNextButton = () => {
    if (currentResult.text) {
      return (
        <>
          <div>{currentResult.text}</div>
          <NextQuestionButton
            onClick={results.length + 1 === question.length ? onFinished : onNextQuestion}
          >
            {results.length + 1 === question.length ? 'Finish' : 'Next Question.'}
          </NextQuestionButton>
        </>
      )
    }
    return null
  }

  const renderQuestionBody = () => {
    if (isFinished) {
      return (
        <ResultContainer>
          <p>Finished !</p>
          <p> Result: {currentScore}% </p>
        </ResultContainer>
      )
    } else {
      return (
        <>
          <QuestionStat>
            Question of {results.length + 1} of {question.length}
          </QuestionStat>
          <QuestionCategory>
            {format(currentQuestion.category)}
          </QuestionCategory>
          <QuestionDifficulty difficulty={currentQuestion.difficulty} />
          <QuestionTitle>
            {format(currentQuestion.question)}
          </QuestionTitle>
          <Answers
            correct={currentQuestion.correct_answer}
            incorrect={currentQuestion.incorrect_answers}
            onAnswerSelect={onAnswerSelect}
            disabled={!!currentResult.text}
            currentAnswer={currentResult.answer}
          />
        </>
      )
    }
  }

  if (loading) { return <Loading>Loading...</Loading> }

  return (
    <Container>
      <ProgressBar>
        <ProgressBarFill width={getWidth()} />
      </ProgressBar>
      {renderQuestionBody()}
      {renderNextButton()}
      <FooterContainer>
        <FooterStatstics>
          <div> Score: {currentScore}%</div>
          <div> Max Score: {maxScore}%</div>
        </FooterStatstics>
        <ProgressBar>
          <ProgressBarCommon width={maxScore || 0} color={'#dedede'} /> { /* max score */}
          <ProgressBarCommon width={currentScore || 0} color={'grey'} />
          <ProgressBarCommon width={lowestPossibleScore || 0} color={'black'} />
        </ProgressBar>
      </FooterContainer>
    </Container>
  )
}

export default QuestionQuiz
