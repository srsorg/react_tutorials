import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { formatDate } from '../../lib/formatter'
import { getJob } from '../../graphql/queries'

function JobPage() {
  const { jobId } = useParams()

  const [cstate, setCstate] = useState({
    job: null,
    loading: true,
    error: false,
  })
  useEffect(() => {
    //  console.log(`the job id is ${jobId}`)
    //getJob(jobId).then(setJob)
    const fetchData = async () => {
      try {
        const job = await getJob(jobId)

        setCstate({ job: job, loading: false, error: false })
      } catch (error) {
        console.log(error)
        setCstate({ job: null, loading: false, error: true })
        console.log(cstate)
      }
    }

    fetchData()
  }, [jobId])

  const { job, loading, error } = cstate
  if (loading) {
    return <div>Loading...</div>
  }
  if (error || !job) {
    return <div>Data not available</div>
  }

  return (
    <div>
      <h1 className="title is-2">{job.title}</h1>
      <h2 className="subtitle is-4">
        <Link to={`/companies/${job.company.id}`}>{job.company.name}</Link>
      </h2>
      <div className="box">
        <div className="block has-text-grey">
          Posted: {formatDate(job.date, 'long')}
        </div>
        <p className="block">{job.description}</p>
      </div>
    </div>
  )
}

export default JobPage
