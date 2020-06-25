import styled from 'styled-components'
import { ReactComponent as StarEmpty } from './star-empty.svg'
import { ReactComponent as StarFill } from './star-fill.svg'

const StarFillIcon = styled(StarFill)`
  height: 15px;
`

const StarEmptyIcon = styled(StarEmpty)`
  height: 15px;
`

export { StarEmptyIcon, StarFillIcon }
