import React from 'react'

const FeedHeader = ({user, showMenu , LogOut , setShowMenu  ,handleLogout}) => {

  return (
      <div className="feed-top-header">
        <h2>Social</h2>

        {user && (
          <div className="profile-menu-wrapper">
            <img
              src={user?.picture}
              alt="profile"
              className="header-profile-pic"
              onClick={() => setShowMenu(!showMenu)}
            />

            {/* Small popup menu */}  
            {showMenu && (
              <div className="profile-popup">
                <button onClick={handleLogout}>
                  <LogOut size={18} /> Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
  )
}

export default FeedHeader