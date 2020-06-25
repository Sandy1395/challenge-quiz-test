import React from 'react'
import _times from 'lodash/times'
import styled from 'styled-components'
import { StarEmptyIcon, StarFillIcon } from '../icons'

const StarContainer = styled.div`
  margin-top: 10px;
  display: flex;
  width: 100px;
`

const QuestionDifficulty = ({ difficulty }) => {
  const getNumberByDifficulty = (difficulty) => {
    switch (difficulty) {
      case 'easy':
        return 1
      case 'medium':
        return 2
      case 'hard':
        return 3
      default:
        return 0
    }
  }

  const renderStar = (Icon, times = 0) => {
    return _times(times, (i) => <Icon key={i} />)
  }

  return (
    <StarContainer>
      {renderStar(StarFillIcon, getNumberByDifficulty(difficulty))}
      {renderStar(StarEmptyIcon, 5 - getNumberByDifficulty(difficulty))}
    </StarContainer>
  )
}

export default QuestionDifficulty
