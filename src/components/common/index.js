import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 50%;
  padding: 1rem;
  margin: 0 auto;
  position: relative;
`

export const QuestionStat = styled.div`
  display: flex;
  text-align: left;
  font-size: 2rem;
  margin-top: 2rem;
`

export const QuestionCategory = styled.div`
 color: grey;
 text-align: left;
 font-size: 15px;
 margin: 5px 5px;
`

export const QuestionTitle = styled.div`
  text-align: left;
  padding: 3rem 0;
  font-family: sans-serif;
`

export const AnswertButton = styled.button`
  background-color: transparent;
  border-radius: 10px;
  padding: 7px;
  min-width: 11rem;
  max-width: 11rem;
  &:focus {
    background-color: black;
    color: #fff
  }
}
`
export const AnswerContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 25px;
`

export const NextQuestionButton =  styled.button`
  margin-top: 2rem;
  padding: 7px;
  border-radius: 10px;
  background-color: #d8d5d5;
  font-weight: 500;
`

export const ProgressBar = styled.div`
    width: 100%;
    height: 30px;
    border: 1px solid #dedede;
    position:relative;
    border-radius: 10px;
}
`
export const ProgressBarFill = styled.div`
  background-color: #7b7474;
  border-radius: 10px;
  width: ${props => props.width}%;
  height: 30px;
`

export const FooterContainer = styled.div`
  position: absolute;
  bottom: 10;
  margin-top: 2rem;
  width: 100%;
`

export const ProgressBarCommon = styled.div`
  background-color: ${props => props.color};
  border-radius: 10px;
  width: ${props => props.width}%;
  height: 30px;
  opacity: 0.75;
  position: absolute;
`

export const FooterStatstics = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 10px;
`

export const ResultContainer = styled.div`
  margin: 2rem;
  font-weight: bold;
`

export const Loading = styled.div`
  margin-top: 3rem;
  font-weight: bold;
  font-size: 24px;
`

export const format = (str) => {
  return decodeURIComponent(str)
}
