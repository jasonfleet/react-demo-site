import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const Feed = () => {
  const { data, error } = useSWR('/api/feed', fetcher)

  if (error) return <div>Failed to load </div>
  if (!data) return <div>Loading...</div>

  return <div className='recipe' >
    <h1>{data.content.items[0].title}</h1>
    <div dangerouslySetInnerHTML={{ __html: data.content.items[0].content }} />
  </div>

}

export default Feed
