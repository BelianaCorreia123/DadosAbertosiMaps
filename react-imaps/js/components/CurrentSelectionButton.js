
class CurrentSelectionButton extends React.Component {

	constructor(props){
		super(props);
		this.state = {selectionsLength: 0, openSelections:false};
	}

	componentDidMount(){
		var me = this;
	}

	openSelections(){
		if(this.state.selectionsLength > 0){
			this.setState({openSelections: !this.state.openSelections});
		}
	}

	changeSelectionLength(length){
		var state = {selectionsLength:length};
		if(length == 0){
			state.openSelections = false;
		}
		this.props.onChangeSelectionsLength(length);
		this.setState(state);
	}

	render() {
		var me = this;
		var openendDiv = [];
		var selectionsLength = this.state.selectionsLength;
		var style={display:'none'};
		if(this.state.openSelections){
		  style= {position: 'absolute', top: 50, backgroundColor: '#43455b', border: '1px solid #313348',padding: 8, listStyleType: 'none', zIndex: 99999, width: 240}
		}

    return(
				<div>
    			<button className={"btn btn-secondary btn-counter btn-selections" + (selectionsLength == 0 ? ' deactivated' : '')} id="btn-selections" onClick={this.openSelections.bind(this)}>
    				Current selections
    				<span className="btn-secondary counter">
    					{selectionsLength}
    				</span>
    			</button>

					<div style={style}>
						<FilterCurrentSelections app={this.props.app} changeFilter={this.changeSelectionLength.bind(this)} />
					</div>
				</div>
      )
  }
}

