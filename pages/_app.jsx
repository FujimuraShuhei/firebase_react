import '../styles/globals.css';
import db from './firebase';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    //データベースからデータを取得する
    const postData = collection(db, 'posts');
    getDocs(postData).then((snapShot) => {
      console.log(snapShot.docs.map((doc) => ({ ...doc.data() })));
    });

    // リアルタイムで取得
    onSnapshot(postData, (post) => {
      setPosts(post.docs.map((doc) => ({ ...doc.data() })));
    });
  }, []);
  return (
    <>
      <Component {...pageProps} />
      <div className="App">
        {posts.map((post) => {
          <div key={post.title}>
            <h1>{post.title}</h1>
          </div>;
        })}
      </div>
    </>
  );
}

export default MyApp;
