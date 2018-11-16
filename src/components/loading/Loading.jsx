import React from 'react'
import styles from './Loading.less'

const Loading = React.createClass({
  propTypes: {
    options: React.PropTypes.object
  },
  getDefaultProps () {
    return {
      options: {}
    }
  },

  componentDidMount () {
  },
  componentDidUpdate (preProps) {
  },
  render () {
    let {isShow, loadingText} = this.props.options
    return isShow && (
      <div>
        <div className={styles.this}>
          <div className={styles.mintIndicatorWrapper}>
            <span className={styles.mintIndicatorSpin}>
              <div className={styles.mintSpinnerSnake} />
            </span>
            {loadingText && <span className={styles.mintIndicatorText}>
              {loadingText}
            </span>}
          </div>
          <div className={styles.shade} />
        </div>
      </div>
    )
  }
})

export default Loading
