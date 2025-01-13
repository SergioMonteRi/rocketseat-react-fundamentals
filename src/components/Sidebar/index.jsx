import { PencilLine } from '@phosphor-icons/react';

import styles from './styles.module.css';

export const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src={"https://images.unsplash.com/photo-1443926818681-717d074a57af?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
            />
            
            <div className={styles.profile}>
                <img className={styles.avatar} src={"https://github.com/sergiomonteri.png"}/>

                <strong>Sergio Ribeiro</strong>
                <span>Web developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}