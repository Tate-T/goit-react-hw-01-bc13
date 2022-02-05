import s from './Statistics.module.css';
import propTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
    return (
        <section className={s.statistics}>
            {title && <h2 className={s.title}>{title}</h2>}

            <ul className={s.statList}>
                {stats.map(prop => (
                    <li className={s.item} key={prop.id}>
                        <span className={s.label}>{prop.label}</span>
                        <span className={s.percentage}>{prop.percentage}</span>
                    </li>
                )
                )}
            </ul>
        </section>
    )
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