import axios from 'axios'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      setLists(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  })

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://jsonplaceholder.typicode.com/">JSON Placeholder</a> Lists
        </h1>

        <p className={styles.description}>
          Study Next.js
        </p>

        <div className={styles.grid}>
          {
            lists.map((list) => {
              return (
                <a className={styles.card} key={list.id}>
                  <h2>{list.title} &rarr;</h2>
                  <p>{list.body}</p>
                </a>
              )
            })
          }
          
        </div>

      </main>
    </div>
  )
}
