import background from "../background.png";
import Button from "react-bootstrap/Button";

export default function Home() {
  return (
    <div>
      <img
        src={background}
        className="img-fluid"
        alt="homepage"
        style={{ width: "1200px", height: "auto" }}
      ></img>
      <Button
        href="http://localhost:5173/invite"
        variant="outline-secondary"
        className="fs-2"
        style={{ position: "absolute", bottom: "25%", right: "37%" }}
      >
        Invite Friends
      </Button>
    </div>
  );
}
