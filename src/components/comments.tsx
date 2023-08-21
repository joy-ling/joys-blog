export default async function Comments({slug}: {slug:string}) {

    const commentsRes = await fetch(`http://localhost:3000/api/comments/${slug}`, {next: {revalidate: 10}});
    const comments = await commentsRes.json();

    return (
        <div className="pt-5 pb-5">
            <h1 className="text-2xl pt-3 pb-3">Comments</h1>

            {/* @ts-ignore */}
            {comments.map((comment) => {
                return (
                    <div className="pt-5 pb-5 border-b-2 border-gray-100" key={comment.uuid}>
                        <strong>{comment.username}</strong>
                        <p>{comment.comment}</p>
                    </div>
                );
            })}

            <h3 className="text-2xl pt-5">Submit a Comment</h3>
            
            <form className="pt-5 pb-5" action={`/api/comments/${slug}`} method="POST">
                <div className="flex flex-col">
                    <label htmlFor="username">Name</label>
                    <input className="border-2 border-gray-100" name="username" type="text"/>
                </div>
                
                <br />
                <label htmlFor="comment">Comment</label>
                <br />
                <textarea className="border-2 border-gray-100" name="comment" cols={30} rows={10}/>
                <br />
                <button className="bg-red-600 text-white p-3 mt-5" type="submit">Submit Comment</button>
            </form>


            
        </div>
    );
}