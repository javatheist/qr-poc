import React, {Component} from 'react';
import QrReader from 'react-qr-scanner';

class QrCam extends Component {
    constructor(props){
        super(props)
        this.state = {
            delay: 500,
            result: 'No result',
        }

        this.handleScan = this.handleScan.bind(this)
    }
    handleScan(result){
        if(result){
            this.setState({ result })
        }
    }
    handleError(err){
        console.error(err)
    }
    render(){
        const previewStyle = {
            height: 240,
            width: 320,
            margin: '0 auto'
        }

        return(
            <div>
                <QrReader
                    delay={this.state.delay}
                    style={previewStyle}
                    onError={this.handleError}
                    onScan={this.handleScan}
                />
                <p class="qr-result">{this.state.result}</p>
            </div>
        )
    }
}

export { QrCam };
