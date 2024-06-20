const Card = (post) => {

    console.log('Card prop del post:', post);
    return (
        <div className="card">
            <h2 className="cardTitle" >{post.post.title}</h2>
            <img className="cardImg"  src={post.post.image} alt={post.post.title} />
            <p className="cardContent" >{post.post.content}</p>
            <p className="cardContent" ><strong>Categoria:</strong>{post.post.category.name}</p>
            <p className="cardContent" ><strong>Tags:</strong></p>
            <p className="cardContent" >{post.post.published}</p>
        </div>
    )
}

export default Card;