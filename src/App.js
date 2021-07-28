import { useState, useEffect, useRef, useCallback } from 'react';
import Card from './Card.js'
import './App.css'

function Throttle() {
  this.timer = null
  this.callback = function (func) {
    if (!this.timer) {
      this.timer = setTimeout(() => {
        this.timer = null
        func()
      }, 300);
    }
  }
}

function App() {
  const [ data, setData ] = useState([])
  const [ page, setPage ] = useState(1)
  const target = useRef(null)
  const fetchData = useCallback(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=10`)
    .then(res => res.json())
    .then(res => {
      setData(data => data.concat(res))
      setPage(prePage => prePage + 1)
    })
  }, [page])
  
  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    const throttle = new Throttle()
    const scrollEvent = () => {
      throttle.callback(() => {
        const scrollLocation = document.documentElement.scrollTop;
        const viewHeight = window.innerHeight;
        const targetLoction = target.current.offsetTop

        if (scrollLocation + viewHeight >= targetLoction) {
          fetchData()
        }
        console.log(scrollLocation, viewHeight, targetLoction)
      })
    }
    window.addEventListener('scroll', scrollEvent)
    return () => window.removeEventListener('scroll', scrollEvent)
  }, [page])
  
  return (
    <div className="wrapper">
      {data.map((post, idx) => 
        <Card ref={data.length - 1 === idx ? target : null} key={idx} id={post.id} body={post.body} email={post.email}/>
      )}
    </div>
  );
}

export default App;
