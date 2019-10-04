const API_URL = "http://localhost:3001"

const request = async (method, url, data) => {
  
  const body = JSON.stringify(data);
  const headers = {
    "Content-Type": "application/json"
  }

  try {
    const res = await fetch(`${API_URL}/${url}`, { method, headers, body });
    return res;
  }
  catch (err) {
    alert(err.message);
  }
}

const get = (url, data) => request("GET", url, data)
const post = (url, data) => request("POST", url, data)

const api = {
  post: {
    list: () => get("posts"),
    detail: id => get(`posts/${id}`),
    add: (id, title, content, author) =>
      post("posts", {
        id,
        title,
        content,
        author,
      }),
  }
}

export default api
