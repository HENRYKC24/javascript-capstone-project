const postComment = async (body, url) => {
  try {
    const result = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return result;
  } catch (e) {
    return { ok: false };
  }
};

export default postComment;