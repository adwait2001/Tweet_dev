import React, { useState } from 'react'

import { createTweets } from './lookup'
import Select from "react-dropdown-select";
import "./tweet.css"
import axios from 'axios';


const options = [
  { label: "Node.js", value: "Node.js" },
  { label: "Django", value: "django" },
  { label: "React", value: "react" },
  { label: "ASP.NET'", value: "Asp.net" },
  { label: "PHP", value: "Php" },
];

export function TweetCreate(props) {
  const textAreaRef = React.createRef()
  const { didTweet } = props;
  const [stack, setstack] = useState([]);
  const [image, setimage] = useState(null)
  const handleBackendUpdate = (response, status) => {
    if (status == 201) {
      console.log(response)
      didTweet(response)
    }
    else {
      console.log(response)
      alert("An error occured please try again")
    }
  }

  function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   const newVal = textAreaRef.current.value
  //   var list = stack.map((obj) => {
  //     return obj.value
  //   })

  //   const img= JSON.stringify(image)
  //   createTweets(newVal, list,img, handleBackendUpdate);
  //   textAreaRef.current.value = " "
  // }


  const handleImageChange = (e) => {
    setimage(e.target.files[0])
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    let form_data = new FormData();
    form_data.append('image', image, image.name);
    const newVal = textAreaRef.current.value
    form_data.append('content', newVal);

    var list = stack.map((obj) => {
      return obj.value
    })
    form_data.append('stack', list);

    textAreaRef.current.value = " "
    let url = 'http://localhost:8000/api/tweet/create/';
    let headers = {
      'Content-Type': 'multipart/form-data',
    }
    const csrftoken = getCookie('csrftoken');
    if (csrftoken) {
      headers = {
        'Content-Type': 'multipart/form-data',
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRFToken': csrftoken
      }
    }
    axios.post(url, form_data, {
      headers: headers
    })
      .then(res => {
        window.location.reload()
        if (res.status == 403) {
          const detail = res.detail
          if (detail === "Authentication credentials were not provided.") {
            if (window.location.href.indexOf("login") === -1) {
              window.location.href = "/login?showLoginRequired=true"
            }
          }
        }
      })
      .catch(err => console.log(err))

  }


  return <div className={props.className}>
    <div className='sidebar create'>
      <form className='styled' onSubmit={handleSubmit}>
        <textarea ref={textAreaRef} required={true} className="form-control form-group textarea" name="tweet">

        </textarea>
        <Select className='background form-group' options={options} multi onChange={(values) => setstack(values)} />
        <div className='flexbox'>
          <input type="file"
            id="image" className='form-group'
            accept="image/png, image/jpeg" onChange={handleImageChange} required />
          <input type="submit" className='btn btn-primary button2' />
        </div>
      </form>
    </div>
  </div>
}