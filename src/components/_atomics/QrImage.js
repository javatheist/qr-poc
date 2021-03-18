import React, {Component} from 'react';
import QrReader from 'react-qr-scanner';

class QrImage extends Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.state = {
            delay: 100,
            result: 'No result',
        };

        this.handleScan = this.handleScan.bind(this);
        this.openImageDialog = this.openImageDialog.bind(this);
    }

    handleScan(result) {
        if (result) {
            this.setState({result});
        }
    }

    handleError(err) {
        console.error(err);
    }

    openImageDialog() {
        this.ref.current.openImageDialog();
    }

    render() {
        const previewStyle = {
            height: 240,
            width: 320,
            margin: '0 auto'
        };

        return (
            <div>
                <QrReader
                    ref={this.ref}
                    delay={this.state.delay}
                    style={previewStyle}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    legacyMode
                />
                <input type="button" value="Click to Submit QR Code" onClick={this.openImageDialog}/>
                <p>{this.state.result}</p>
            </div>
        )
    }
}

export { QrImage };
