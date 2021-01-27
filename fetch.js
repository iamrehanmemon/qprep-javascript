async function getCommentsByUserId(userId) {
  let data = [];

  const fetchedData = await fetch("/api/comments").then((res) => res.json());

  for (let i = 0; i < fetchedData.length; i++) {
    if (fetchedData[i].userId === userId) {
      data.push(fetchedData[i].data);
    }
  }

  return data;
}
