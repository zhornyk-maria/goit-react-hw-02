import css from './Options.module.css';

const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
    return (
        <div className={css.buttonsContainer}>
            <button onClick={() => updateFeedback('good')}>Good</button>
            <button onClick={() => updateFeedback('neutral')}>Neutral</button>
            <button onClick={() => updateFeedback('bad')}>Bad</button>
            {totalFeedback !== 0 && <button onClick={() => resetFeedback(0)}>Reset</button>}
        </div>
    );
};

export default Options;