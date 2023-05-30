import LeftSide from './LeftSide/LeftSide'
import RightSide from './RightSide/RightSide'
import CenterSite from './CenterSite/CenterSite'
import PopUp from './Modal/PopUp'

const ProfilPage = () => {
  return (
    <div style={{ display: 'flex', backgroundColor: 'var(--profileColor)' }}>
      <div>
        <LeftSide />
      </div>
      <div style={{ borderLeft: '1px solid var(--borderColor)' }}>
        <RightSide />
        <CenterSite />
      </div>
      <PopUp />
    </div>
  )
}
export default ProfilPage
