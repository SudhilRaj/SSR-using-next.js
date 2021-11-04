import axios from 'axios';
import { useEffect, useState } from 'react';
import Lists from '../components/Lists';
import styles from '../styles/Home.module.css';

export default function Home({lists}) {
//   const [lists, setLists] = useState([]);

//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/posts?_limit=12')
//     .then(response => {
//       setLists(response.data);
//     })
//     .catch(error => {
//       console.log(error);
//     })
//   },[])

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://jsonplaceholder.typicode.com/">JSON Placeholder</a> Lists
        </h1>

        <p className={styles.description}>
          Study Next.js
        </p>

        <Lists lists={lists}/>
		
      </main>
    </div>
  )
}

// Get data without using useEffect (This method will run on server side and user will see the result without any delay. 
// Otherwise the request will start only after the component mounting)
export const getStaticProps = async() => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=12');
    return {
        props: {
            lists: res.data
        }
    };
}
