class HomeBoxes extends React.Component {

	constructor(props){
		super(props);
		this.state = {};
	} 

	render() {

        var progbar = {
            color: 'white',
            width: this.props.prog
                  };

    return 	 	<div class="rows">
                  <div class="col-sm-6 box-container">
                      <div class="view-header">
                          <div class="header-icon">
                              <i class="material-icons">{this.props.icon}</i>
                          </div>
                          <div class="header-title">
                              <h3>{this.props.title}</h3>
                          </div>
                          <p class="description">
                              {this.props.desc}
                          </p>
                        <div class="qvf-data">
                            <p>{this.props.qlikData}</p>
                        </div>
                          <div class="meter orange">
                            <span style={progbar}></span>
                          </div>
                          <div class="texto-meta">
                            <p>{this.props.meta}</p>
                          </div>
                      </div>
                  </div>
                </div>
  }
}

