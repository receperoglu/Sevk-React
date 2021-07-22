import React, { Component } from "react";

class ArticelsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.isMobile? <table className="Articels table table-hover">
          <thead>
            <tr className="tablehead">
              <td className="col-md-12">Firma<br>
              </br>Articel / Sipariş</td>           
            </tr>
          </thead>
          <tbody>
            {this.props.Articels.map((a) => (
              <tr
                className="ArticelRow"
                id={this.props.Articel + a.id}
                key={a.id}
                onClick={() =>
                  this.props.GetOrders(
                    a.id,
                    a.CorpId,
                    a.ArticelName,
                    a.CustomerName
                  )
                }
              >
                <td style={{ whiteSpace: "break-spaces" }}>{a.CustomerName}<br></br>
                <span className="ArticelId">AT-{a.id}</span>
                  {a.ArticelName}</td>
                
              </tr>
            ))}
          </tbody>
        </table>:  <table className="Articels table table-hover">
          <thead>
            <tr className="tablehead">
              <td className="col-md-6">Firma</td>
              <td className="col-md-6">Articel / Sipariş</td>
            </tr>
          </thead>
          <tbody>
            {this.props.Articels.map((a) => (
              <tr
                className="ArticelRow"
                id={this.props.Articel + a.id}
                key={a.id}
                onClick={() =>
                  this.props.GetOrders(
                    a.id,
                    a.CorpId,
                    a.ArticelName,
                    a.CustomerName
                  )
                }
              >
                <td style={{ whiteSpace: "break-spaces" }}>{a.CustomerName}</td>
                <td>
                  <span className="ArticelId">AT-{a.id}</span>
                  {a.ArticelName}
                </td>
              </tr>
            ))}
          </tbody>
        </table>}
      
       
      </div>
    );
  }

  componentDidMount() {}

  componentWillUnmount() {}
}

export default ArticelsTable;
