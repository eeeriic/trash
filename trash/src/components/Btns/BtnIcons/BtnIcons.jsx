import styles from "./BtnIcons.module.css"

export default function BtnFoods( { icon: Icon, bg, onClick } ) {

    return (
        <button className={styles.btn} style={{ backgroundColor: bg }} onClick={onClick}>
            <Icon style={{backgroundColor: bg}}></Icon>
        </button>
    )
}

