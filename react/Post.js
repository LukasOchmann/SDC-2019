import React, {useState} from 'react';

export default function Post() {
  const [liked, setLike] = useState(false)
  return (
    <div>
      {'...'}
      <Like isLiked={liked} clickEvent={() => setLike(!liked)} />
    </div>);
}
