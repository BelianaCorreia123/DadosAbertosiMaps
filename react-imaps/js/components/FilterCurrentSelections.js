class FilterCurrentSelections extends React.Component {

	constructor(props){
		super(props);
		this.state = {selectedFields: []};
	}

	componentDidMount(){
		var app = this.props.app;
		var me = this;
		if(app){

			app.getList("CurrentSelections", function (reply) {
	                       var selections = reply.qSelectionObject.qSelections;
	                       var selectedFields = [];
	                       selections.forEach(_ => {
	                           let name = _.qField
	                           selectedFields.push({
	                               values: _.qSelected,
	                               field: _.qField,
	                               name: name
	                           })
	                       });
	                       if(me.props.changeFilter){
	                       	me.props.changeFilter(selectedFields.length);
	                       }
	                       me.setState({selectedFields: selectedFields});
	                   });
		}

	}


	removeFilter(filterName){
		if(this.props.app && filterName){
			this.props.app.field(filterName).clear();
		}
	}

	render() {
		var me = this;
		var selections = [], openendDiv = [];
			this.state.selectedFields.forEach(function(selection){
				selections.push(<li style={{marginBottom: 15, marginTop: 0}}>
													<span style={{color:'#75768d', fontWeight: 400, padding: '5px 5px 1px 5px', fontSize: 11}}>{selection.name}</span>
													<div style={{color: '#000', backgroundColor: '#fec200', marginTop: 5, width: '100%',padding: '3px 8px', boxSizing: 'border-box', position: 'relative', paddingRight: 30}}>
														{selection.values}
														<span className="icon" onClick={me.removeFilter.bind(me,selection.name)} style={{position: 'absolute',right: 5, top: 5, height: 15, width: 15, borderRadius: 10, fontSize: 16, textAlign: 'center', verticalAlign: 'middle',  cursor: 'pointer'}}><i className="fa fa-trash"></i></span>
													</div>
												</li>);
				
			});
		if( selections.length > 0){
			openendDiv=<ul  >{selections}</ul>
		}
    return(
					<div>
						{openendDiv}
					</div>
      )
  }
}


