import s from './Statistics.module.css';
import propTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
    return (
        <>
            <h2>TASK 2</h2>
            <section className={s.statistics}>
                <div className={s.statisticsCard}>
                    {title && <h2 className={s.title}>{title}</h2>}
                    <ul className={s.statList}>
                        {stats.map(prop => (
                            <li className={s.item} key={prop.id} style={{ backgroundColor: getRandomHexColor() }}>
                                <span className={s.label}>{prop.label}</span> <br />
                                <span className={s.percentage}>{prop.percentage}%</span>
                            </li>
                        )
                        )}
                    </ul>
                </div>
            </section>
        </>
    )
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`
}

Statistics.propTypes = {
    title: propTypes.string,
    stats: propTypes.arrayOf(propTypes.shape({
        id: propTypes.string,
        label: propTypes.string,
        percentage: propTypes.number,
    }))
}.isRequired;

export default Statistics