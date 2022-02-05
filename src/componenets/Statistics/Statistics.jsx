import s from './Statistics.moduke.css';

const Statistics = ({ id, label, percentage }) => {
    return (
        <section className={s.statistics}>
            <h2 className={s.title}>Upload stats</h2>

            <ul className={s.statList} key={id}>
                <li className={s.item}>
                    <span className={s.label}>{label}</span>
                    <span className={s.percentage}>{percentage}</span>
                </li>
                <li className={s.item}>
                    <span className={s.label}>{label}</span>
                    <span className={s.percentage}>{percentage}</span>
                </li>
                <li className={s.item}>
                    <span className={s.label}>{label}</span>
                    <span className={s.percentage}>{percentage}</span>
                </li>
                <li className={s.item}>
                    <span className={s.label}>{label}</span>
                    <span className={s.percentage}>{percentage}</span>
                </li>
            </ul>
        </section>
    )
}

export default Statistics