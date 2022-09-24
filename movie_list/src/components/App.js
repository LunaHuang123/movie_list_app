import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      movienmae: "1st movie",
      datetime: "01/01/1999",
      body: "description 1"
    },
    {
      id: 2,
      movienmae: "2nd movie",
      datetime: "01/01/1999",
      body: "description 2"
    },
    {
      id: 3,
      movienmae: "3rd movie",
      datetime: "01/01/1999",
      body: "description 3"
    },
    {
      id: 4,
      movienmae: "4th movie",
      datetime: "01/01/1999",
      body: "description 4"
    }
    {
    id: 4,
        movienmae: "4th movie",
        datetime: "01/01/1999",
        body: "description 4"
      }

    
  ])

  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');

  useEffect(() => {
    const filteredResults = posts.filter((post) =>
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase()));

      const handleSubmit = (e) => {
        e.preventDefault();
        const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');
        const newPost = { id, title: postTitle, datetime, body: postBody };
        const allPosts = [...posts, newPost];
        setPosts(allPosts);
        setPostTitle('');
        setPostBody('');
        history.push('/');
      }

      const handleDelete = (id) => {
        const postsList = posts.filter(post => post.id !== id);
        setPosts(postsList);
        history.push('/');
      }

      return (
        <div className="App">
          <Header title="Our Top Rateed Movies List" />
          <Nav search={search} setSearch={setSearch} />
          <Switch>
            <Route exact path="/">
              <Home posts={searchResults} />
            </Route>
            <Route exact path="/post">
              <NewPost
                handleSubmit={handleSubmit}
                postTitle={postTitle}
                setPostTitle={setPostTitle}
                postBody={postBody}
                setPostBody={setPostBody}
              />
            </Route>
            <Route path="/post/:id">
              <PostPage posts={posts} handleDelete={handleDelete} />
            </Route>
            <Route path="/about" component={About} />
            <Route path="*" component={Missing} />
          </Switch>
          <Footer />
        </div>
      );
    }


}
export default App;