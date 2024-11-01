import styles from "./Header.module.css";

const Header = () => {
    return (
        <>
        <div className={styles.header}>
            <h3><i className="material-icons">chat_bubble_outline</i> Scuba Talk</h3>
        </div>
      </>
    )
}

export default Header;