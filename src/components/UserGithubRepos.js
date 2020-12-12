import React from 'react'
import GithubRepo from './GithubRepo'

export default function UserGithubRepos({repos}) {
    return (
        <div className='github-repos mt-4 px-6 md:px-0 flex flex-col justify-center items-center' >
                {repos.map(repo => 
                    <GithubRepo repo_data={repo} key={repo.id} />
                )}
        </div>
    )
}
