import LeftSide from './LeftSide/LeftSide'
import RightSide from './RightSide/RightSide'
import CenterSite from './CenterSite/CenterSite'
import PopUp from './Modal/PopUp'

export const ProfilePage = () => {
  return (
    <div
      style={{
        display: 'flex',
        backgroundColor: 'var(--profileColor)',
      }}
    >
      <div style={{ margin: '0 15px' }}>
        <div>
          <LeftSide />
        </div>
        <div
          style={{ borderLeft: '1px solid var(--borderColor)', width: '100%' }}
        >
          <RightSide />
          <CenterSite />
        </div>
        <PopUp />
      </div>
    </div>
  )
}
