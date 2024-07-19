import {h, Component} from 'preact';

class Layout extends Component {
  render() {
    return (
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="description" content=`{this.props.description}`>
          <title>{this.props.title}</title>
        </head>
        <body>
          <header id="layout-header">
            <h1 id="heading" class="heading">{this.props.title}</h1>
          </header>
          {this.props.children}
        </body>
      </html>
    )
  }
}

export {Layout};
