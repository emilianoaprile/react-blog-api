const Card = (post) => {

    console.log('Card prop del post:', post);
    return (
        <div className="card">
            <h2 className="cardTitle" >{post.post.title}</h2>
            <img className="cardImg"  src={post.post.image} alt={post.post.title} />
            <p className="cardContent" >{post.post.content}</p>
            <p className="cardContent" ><strong>Categoria:</strong>{post.post.category.name}</p>
            <div className="cardContent" ><strong>Tags:</strong>
                <ul className="tags">
                    {post.post.tags.map((tag, index) => (
                        <li className="tag" key={index}>{`# ${tag.name}`}</li>
                    ))}
                </ul>
            </div>
            <p className="cardContent" >{post.post.published}</p>
        </div>
    )
}

export default Card;