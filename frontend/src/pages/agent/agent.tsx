import { Button } from "@mui/material";
import styles from "../CommonPageStyling.module.scss";

export const Agent = () => {
  return (
    <div className={styles.holder}>
      <div className={styles.background}>
        <span
          style={
            { "--i": "10vh", "--w": "10vw", "--t": "2s" } as React.CSSProperties
          }
        ></span>
        <span
          style={
            { "--i": "87vh", "--w": "20vw", "--t": "3s" } as React.CSSProperties
          }
        ></span>
        <span
          style={
            {
              "--i": "54vh",
              "--w": "15vw",
              "--t": "2.76s",
            } as React.CSSProperties
          }
        ></span>
        <span
          style={
            {
              "--i": "45vh",
              "--w": "30vw",
              "--t": "1.5s",
            } as React.CSSProperties
          }
        ></span>
        <span
          style={
            {
              "--i": "80vh",
              "--w": "30vw",
              "--t": "4.7s",
            } as React.CSSProperties
          }
        ></span>

        <span
          style={
            {
              "--i": "32vh",
              "--w": "40vw",
              "--t": "2.5s",
            } as React.CSSProperties
          }
        ></span>
        <span
          style={
            {
              "--i": "15vh",
              "--w": "50vw",
              "--t": "3.4s",
            } as React.CSSProperties
          }
        ></span>
        <span
          style={
            {
              "--i": "67vh",
              "--w": "60vw",
              "--t": "1.75s",
            } as React.CSSProperties
          }
        ></span>
        <span
          style={
            {
              "--i": "89vh",
              "--w": "70vw",
              "--t": "2.3s",
            } as React.CSSProperties
          }
        ></span>
        <span
          style={
            {
              "--i": "65vh",
              "--w": "80vw",
              "--t": "3.1s",
            } as React.CSSProperties
          }
        ></span>
        <span
          style={
            {
              "--i": "40vh",
              "--w": "75vw",
              "--t": "2.0s",
            } as React.CSSProperties
          }
        ></span>
        <span
          style={
            {
              "--i": "14vh",
              "--w": "80vw",
              "--t": "2.46s",
            } as React.CSSProperties
          }
        ></span>
        <span
          style={
            {
              "--i": "21vh",
              "--w": "95vw",
              "--t": "1.4s",
            } as React.CSSProperties
          }
        ></span>
      </div>
      <div className={styles.pageHolder}>
        <div className={styles.mainText}>welcome to your agent</div>
        <div className={styles.subHolder}>
          <Button variant="text" href={"/"}>
            go home
          </Button>
        </div>
      </div>
    </div>
  );
};
