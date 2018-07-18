'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({ userinfo, repos, starred, handleSearch, getRepos, getStarred, isFetching }) => (
  <div className='app'>
    <Search isDisabled={isFetching} handleSearch={handleSearch} />
    {isFetching && <div>Carregando...</div>}
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo &&
      <Actions getRepos={getRepos}
        getStarred={getStarred}
      />
    }

    <Repos
      className='repos'
      title='Repositórios'
      repos={repos}
    />

    <Repos
      className='starred'
      title='Favoritos'
      repos={starred}
    />
  </div>
)

AppContent.propTypes = {
  userinfo: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired
}

export default AppContent
