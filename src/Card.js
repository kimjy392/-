import {forwardRef, memo} from 'react'

const Card = memo(forwardRef(({ id, email, body }, ref) => {
  return (
    <div ref={ref} className="card">
        <div className="id">
          <span className="title">Comment </span><span>{id}</span>
        </div>
        <div className="email">
          <span className="title">Email</span> <span>{email}</span>
        </div>
        <div className="comment">
          <div className="title">Commnet</div>
          <div className="context">{body}</div>
        </div>
    </div>
  );
}));

export default Card