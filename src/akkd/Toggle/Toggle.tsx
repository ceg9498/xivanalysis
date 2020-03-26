import classnames from 'classnames'
import React from 'react'
import styles from './Toggle.module.css'

interface Props {
	checked?: boolean,
	className?: string,
	label: string,
	onChange: (e: any, data: any)=>void,
}
interface State {
	checked: boolean,
}

export class Toggle extends React.PureComponent<Props, State> {
	constructor(props: Props) {
		super(props)
		this.state = {checked: this.props.checked || false}
	}

	_onChange = (e: any) => {
		const checked = !this.state.checked
		this.props.onChange(e, {checked})
		this.setState({checked})
	}

	render() {
		const {className, label} = this.props
		const {checked} = this.state
		return (
			<label className={classnames(
				styles.toggle,
				className,
			)}>
				<input
					type="checkbox"
					onChange={(e)=>this._onChange(e)}
					checked={checked}
				/>
				<span className={styles.slider} />
				{label}
			</label>
		)
	}
}
