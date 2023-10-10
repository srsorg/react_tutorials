import { useState, useEffect } from 'react'
import { getJobs } from '../graphql/queries'
import JobList from '../components/JobPages/JobList'
import { useAppContext } from '../GlobalContext'

const GraphqlBasics = () => {
  const [jobs, setJobs] = useState([])
  const { appValue } = useAppContext()

  useEffect(() => {
    console.log(appValue)
    getJobs().then((jobs) => {
      setJobs(jobs)
    })
  }, [])

  return (
    <div>
      <h1 className="title">Job Board - {appValue.config} </h1>
      <JobList jobs={jobs} />
    </div>
  )
}

export default GraphqlBasics
