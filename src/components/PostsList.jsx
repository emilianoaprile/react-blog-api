import Card from './Card.jsx'


const Posts = ({response}) => {

    console.log('response dentro a PostsList:', response)
    
    return (
        <>  
        <div className='posts'>
            {response === null && 'Caricando i post..'}
            {response && response.length === 0 && 'Nessun post trovato.'}
            {response && response.map((post) => (
                <Card key={post.id} post={post} />
            ))}
        </div>
        </>
    )

}

export default Posts