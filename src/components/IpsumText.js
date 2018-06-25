import React from 'react';
import TextareaAutoSize from 'react-autosize-textarea';

class IpsumText extends React.Component {
  copyIpsum = (e) => {
    const copyText = document.querySelector('.text-area');
    copyText.select();
    try {
      const successful = document.execCommand('copy');
      const msg = successful ? 'successful' : 'unsuccessful';
      console.log(msg);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className="returned-ipsum">
        <TextareaAutoSize className="text-area" value={this.props.value} />
        <br />
        <button onClick={this.copyIpsum}>Copy</button>
        <button onClick={this.props.handleReset}>Reset</button>
      </div>
    );
  }
}

export default IpsumText;
