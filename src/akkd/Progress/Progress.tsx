import classNames from 'classnames'
import React from 'react'
import styles from './Progress.module.css'

interface Props {
	className?: string,
	color?: 'green' | 'yellow' | 'red',
	percent: string | number,
}

export class Progress extends React.PureComponent<Props> {
	_formatPercent(percent: string|number): string {
		if (typeof percent === 'string') {
			percent = parseInt(percent, 10)
		}
		return percent > 100 ? '100%' : percent+'%'
	}
	render() {
		const {className, color, percent} = this.props
		return (
			<div className={classNames(
				styles.progress,
				className,
			)}>
				<div className={classNames(
					styles.bar,
					color && styles[color],
				)} style={{width: this._formatPercent(percent)}} />
			</div>
		)
	}
}
