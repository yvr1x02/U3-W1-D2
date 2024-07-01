import { Button, ListGroup } from "react-bootstrap";

const SingleComment = ({ comment }) => {
  const deleteComment = async (asin) => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZmU4YjdjMjM5YzAwMTUyZjRiNmUiLCJpYXQiOjE3MTk4MzQ1ODgsImV4cCI6MTcyMTA0NDE4OH0.hHarO-w6zdPV4yhQLDKN3cdJeSB2gCx6uUlN1gUzAJ4",
        },
      });
      if (response.ok) {
        alert("La recensione è stata eliminata!");
      } else {
        throw new Error("La recensione non è stata eliminata!");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <ListGroup.Item>
      {comment.comment}
      <Button variant="danger" className="ms-2" onClick={() => deleteComment(comment._id)}>
        Elimina
      </Button>
    </ListGroup.Item>
  );
};

export default SingleComment;
