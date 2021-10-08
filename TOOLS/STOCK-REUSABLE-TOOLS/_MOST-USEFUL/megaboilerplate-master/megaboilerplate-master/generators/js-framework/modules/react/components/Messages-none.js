return this.props.messages.success ? (
  <div role="alert" className="text-success">
    {this.props.messages.success.map((message, index) => <div key={index}>{message.msg}</div>)}
  </div>
) : this.props.messages.error ? (
  <div role="alert" className="text-danger">
    {this.props.messages.error.map((message, index) => <div key={index}>{message.msg}</div>)}
  </div>
) : this.props.messages.info ? (
  <div role="alert" className="text-info">
    {this.props.messages.info.map((message, index) => <div key={index}>{message.msg}</div>)}
  </div>
) : null;
