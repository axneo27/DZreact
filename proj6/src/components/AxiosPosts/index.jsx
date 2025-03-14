import axios from "axios";
import { useState, useEffect } from "react";

const AxiosPosts = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [newPost, setNewPost] = useState({ title: "", body: "" });

    const fetchData = async () => {
        try {
            const response = await axios.get(url);
            setPosts(response.data);
            setError(null);
        } catch (error) {
            console.error("Error fetching data:", error);
            setError("Failed to fetch data");
            setPosts([]);
        }
    };

    const createPost = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(url, {
                title: newPost.title,
                body: newPost.body,
                userId: 1, 
            });
            console.log("response:", response.data); 
            setPosts([response.data, ...posts]); 
            setNewPost({ title: "", body: "" }); 
        } catch (error) {
            console.error("Error:", error);
            setError("Failed to create post");
        }
    };

    const deletePost = async (id) => {
        try {
            await axios.delete(`${url}/${id}`);
            setPosts(posts.filter((post) => post.id !== id));
        } catch (error) {
            console.error("Error:", error);
            setError("Failed to delete post");
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h1>Axios Posts</h1>

            <form onSubmit={createPost}>
                <input
                    type="text"
                    placeholder="Title"
                    value={newPost.title}
                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                    required
                />
                <textarea
                    placeholder="Body"
                    value={newPost.body}
                    onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
                    required
                />
                <button type="submit">Create Post</button>
            </form>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <button onClick={() => deletePost(post.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AxiosPosts;