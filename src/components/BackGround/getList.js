// import React from 'react'
// import axios from 'axios';

export default async function getList() {
  const apiAddress = 'https://api.unsplash.com';
  const accessKey = 'GX6cJXQnXXo3jOzqeDvkUaD24XuuF6XBbadQ3siLF-0';
  const res = await fetch(
    `${apiAddress}/photos/random?client_id=${accessKey}&query=nature&count=1`,
  );
  const photo = res.json();
  console.log(res);
  console.log(photo.urls);
  console.log(photo);

  return photo;
}

// setInterval(() => {
//   getList();
// }, 5000);
