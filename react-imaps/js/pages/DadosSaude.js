var browserHistory = ReactRouter.browserHistory;


class DadosSaude extends React.Component {

	constructor(props){
		super(props);
		this.state = {};
	}

	componentDidMount(){
	}

	render() {

	  return	<div> 
	   					<div class="row">
                  <div class="col-lg-12">
                      <div class="view-header">
                          <div class="header-icon">
                              <i class="material-icons"></i>
                          </div>
                          <div class="header-title">
                              <h3>KPI Dashboard</h3>
                          </div>
                          <p class="description">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                          </p>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-lg-4 col-md-4 col-xs-12">
                      {/* <TripleGauge arcColors={['green','yellow','red']} linesColor='white' backgroundColor='#363636'/> */}
                  </div>
                  <div class="col-lg-4 col-md-4 col-xs-12">
                     {/* <TripleGauge arcColors={['red','red','red']} linesColor='white' backgroundColor='#363636'/> */}
                  </div>
                  <div class="col-lg-4 col-md-4 col-xs-12">
                      {/* <QuintupleGauge arcColors={['green','yellow','red','blue','gray']} linesColor='white' backgroundColor='#363636'/> */}
                  </div>
              </div>            
	  			</div>
  }
}