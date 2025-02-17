import styles from "./styles.module.css";

export const Avatar = (props) => {
  const { hasBorder = true, src } = props;

  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
};
